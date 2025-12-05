import { Layout } from '../components/layout';

export function BulkDeleteOrdersScreencastPage() {
  return (
    <Layout showFooterCTA={false}>
      <section className="py-16 px-6 bg-[#F6F6F7] min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#202223] mb-2 text-center">
            Bulk Delete Orders
          </h1>
          <p className="text-[#616569] text-center mb-8">Screencast Demo</p>

          <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            >
              <source src="/resources/BDO_Screencast.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </Layout>
  );
}
