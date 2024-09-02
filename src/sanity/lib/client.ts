import { createClient } from 'next-sanity'
import type { PagePayload } from '../../../types'
import { apiVersion, dataset, projectId, useCdn } from './api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getPageBySlug({
  token,
  query,
  params,
}: {
  query: string
  token?: string
  params?: any
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(query, params)
}

export async function getPagePaths(pagePaths: any): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}