import PageLayout from '../components/PageLayout'
import ResolutionForm from '../components/ResolutionForm'
import Resolutions from '../components/Resolutions'
import prisma from '../lib/prisma'
import type IResolution from '../types/resolution'

type ResolutionsProps = {
  resolutions: IResolution[]
}

export default function Home({ resolutions }: ResolutionsProps) {
  return (
    <PageLayout metaTitle="2023 resolutions | Home">
      <section className="max-w-screen-md text-slate-400 mx-auto">
        <Resolutions resolutions={resolutions} />
        <ResolutionForm />
      </section>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const resolutions = await prisma.resolution.findMany()

  return {
    props: {
      resolutions,
    },
  }
}
