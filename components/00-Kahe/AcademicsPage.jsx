"use client";
import { removeShortcodes } from "@/utils/functions.utils";
import { CustomHook } from "@/utils/customHook";

const AcademicsPage = ({ slug = "" }) => {
  const { data, loading, error } = CustomHook(slug);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>{data?.title?.rendered}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: removeShortcodes(data?.content?.rendered),
        }}
      />
    </div>
  );
};

export default AcademicsPage;
