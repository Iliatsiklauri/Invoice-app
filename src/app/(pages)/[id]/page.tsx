import Goback from '@/app/components/about/Goback';

type Params = {
  params: {
    id: string;
  };
};
export default function page({ params }: Params) {
  return (
    <div className="flex items-start justify-center flex-col px-6 py-10">
      <Goback />
    </div>
  );
}
