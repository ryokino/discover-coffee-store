import Document, { Html, Head, Main, NextScript } from 'next/document'

// Document をextendsするためにfunctionを使っていない
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Pacifico-Regular.ttf'
            as='font'
            crossOrigin='anonymous'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
