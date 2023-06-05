import QuillBetterTable from 'src/quill-better-table.js'
// import better-table styles file

Quill.register({
  'modules/better-table': QuillBetterTable
}, true)

window.onload = () => {

  function customTableHandler(tableModule) {
     tableModule.insertTable(3, 3)
  }

  const quill = new Quill('#editor-wrapper', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'table'],
        ['clean'],
      ],
      table: false,
      'better-table': {
        operationMenu: {
          items: {
            unmergeCells: {
              text: 'Another unmerge cells name',
            },
          },

          color: {
            colors: [
              'red',
              'green',
              'yellow',
              'white',
              'red',
              'green',
              'yellow',
              'white',
            ],
          },
        },
      },
      keyboard: {
        bindings: QuillBetterTable.keyboardBindings,
      },
    },
  })

  let tableModule = quill.getModule('better-table')
  var toolbar = quill.getModule('toolbar')

  toolbar.addHandler('table', () => customTableHandler(tableModule))

  // document.body.querySelector('#insert-table')
  //   .onclick = () => {
  //     tableModule.insertTable(3, 3)
  //   }

  // document.body.querySelector('#get-table')
  //   .onclick = () => {
  //     console.log(tableModule.getTable())
  //   }

  // document.body.querySelector('#get-contents')
  //   .onclick = () => {
  //     console.log(quill.getContents())
  //   }
}
