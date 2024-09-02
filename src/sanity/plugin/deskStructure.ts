import { Globe, Browsers, Compass, SquareHalfBottom, Article, ChalkboardTeacher } from 'phosphor-react'

export const deskStructure = (S: any, context: any) =>
  S.list()
    .title('Nettverk Studio')
    .items([
      // PAGES ------------------
      S.listItem()
        .title('Tutorial')
        .icon(Browsers)
        .child(
          S.list()
            .title('Sider')
            .items([
              S.documentTypeListItem("page").title("Internett").icon(Browsers),
            ]),
        ),
    ])

export default deskStructure