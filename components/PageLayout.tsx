import Head from 'next/head'

type PageLayoutProps = {
  metaTitle?: string
  metaDescription?: string
  children: React.ReactNode
}

function PageLayout({
  metaTitle = '2023 resolutions',
  metaDescription = 'A web app to keep track of your resolutions for the year.',
  children,
}: PageLayoutProps) {
  return (
    <div className="container">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
export default PageLayout
