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
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-screen-md mx-auto text-center text-slate-400 py-8">
        <h1 className="text-2xl md:text-4xl font-semibold inline-block">
          My 2023 New&apos;s year&apos;s Resolutions
        </h1>
      </header>
      <main>{children}</main>
    </>
  )
}
export default PageLayout
