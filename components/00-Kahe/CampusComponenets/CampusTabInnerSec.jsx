"use client";

import TabMenu from "../Components/TabMenu";

const CampusTabInnerSec = ({ tabSections, tabContent }) => {
  // Helper to render dynamic blocks (reused across different tabs)
  const renderBlocks = (blocks) => {
    return blocks.map((block, bIndex) => {
      switch (block.type) {
        case "text":
          return (
            <p key={bIndex} className={block.isQuote ? " border-start ps-3" : ""}>
              {block.value}
            </p>
          );

        case "image":
          return (
            <div key={bIndex} className={`ncc-image my-4 ${block.align === "center" ? "text-center" : ""}`}>
              <img
                src={block.url}
                alt={block.alt || "NCC Content"}
                className="img-fluid rounded shadow-sm"
                style={block.width ? { maxWidth: block.width } : {}}
              />
              {block.caption && <h4 className="mt-3 text-secondary">{block.caption}</h4>}
            </div>
          );

        case "list":
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={bIndex} className="ps-4">
              {block.items.map((li, i) => (
                <li key={i} className="mb-2">{li}</li>
              ))}
            </ListTag>
          );

        case "table":
          return (
            <div key={bIndex} className="table-responsive my-4">
              <table className="table table-bordered align-middle">
                {block.headers && (
                  <thead className="table-light">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} colSpan={h.colSpan || 1}>{h.text}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} colSpan={cell.colSpan || 1}>
                          {cell.text || cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

        case "downloads":
          return (
            <div key={bIndex} className="downloads my-4 p-4 bg-light border rounded">
              <h5 className="mb-3">Resources</h5>
              <div className="d-flex flex-wrap gap-2">
                {block.files.map((file, i) => (
                  <a key={i} href={file.url} download className="btn  btn-primary p-2" style={{fontSize:"16px"}}>
                    <i className="feather-download me-2"></i> {file.label}
                  </a>
                ))}
              </div>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="course-details-content tab-in">
      <div className="rbt-inner-onepage-navigation sticky-top">
        <TabMenu sections={tabSections} DontshowNav />
      </div>

      <div className="section-bg1">
        {tabContent?.map((item) => {
          // 1. Handle Overview Tab (Unique Structure)
          if (item.tab === "overview") {
            const overviewData = item.overview?.content?.[0];
            return (
              <section key={item.tab} className="ncc-section p-4" id="overview">
                <h2 className="title">{overviewData?.title}</h2>
                <div className="row mt-4 align-items-center">
                  {overviewData?.src && (
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <img src={overviewData.src} alt="Overview" className="img-fluid rounded shadow" />
                    </div>
                  )}
                  <div className={overviewData?.src ? "col-lg-8" : "col-12"}>
                    <p className="description">{overviewData?.content}</p>
                  </div>
                </div>
              </section>
            );
          }

          // 2. Handle Generic Tabs (about_ncc, activities, etc.)
          const sections = item.content?.sections || [];
          return (
            <section key={item.tab} className="ncc-section p-4 mt-5 border-top" id={item.tab}>
              {sections.map((section, sIndex) => (
                <div key={sIndex} className="ncc-block mb-5 mt-5">
                  {section.title && <h3 className="section-title mb-4">{section.title}</h3>}
                  {section.blocks && renderBlocks(section.blocks)}
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CampusTabInnerSec;