const backTick = "`"
const backTick3 = "```"

export const startTerm = `# Hello

## practice your markdown!

### Lists
1. First **item**
2. Second item
3. Third **item**
4. Fourth item 

## ===================

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

For code you type ${backTick}code goes here${backTick}.

    <html>
      <head>
      </head>
    </html>

${backTick3}
function doThis(str){
  return str
}
${backTick3}

![React Logo w/ Text](https://goo.gl/Umyytc)

To learn more goto [markdown docs](https://www.markdownguide.org/)
 `