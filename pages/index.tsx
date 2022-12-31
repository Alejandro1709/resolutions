import PageLayout from '../components/PageLayout'
import ResolutionForm from '../components/ResolutionForm'
import Resolutions from '../components/Resolutions'

export default function Home() {
  return (
    <PageLayout metaTitle="2023 resolutions | Home">
      <section className="max-w-screen-md text-slate-400 mx-auto">
        <Resolutions />
        <ResolutionForm />
      </section>
    </PageLayout>
  )
}
