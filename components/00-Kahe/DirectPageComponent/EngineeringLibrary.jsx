"use client";

import BreadCrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import TabInnerSection from "@/components/00-Kahe/Components/TabInnerSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/ACADEMIC/library.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar2 from "../common-components/Sidebar2";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import LibraryTab from "../Components/libraryTab";

console.log("data", data);

const EngineeringLibrary = () => {
  const breadcrumbItems = [
    { label: "Academics", href: `academics` },
   

    { label: "Library" },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={data} />
          <BreadCrumb items={breadcrumbItems} />

          <main className="d-flex pt-5 px-0 mx-0">
            <div className="rbt-course-details-area w-100">
              <div className="row mx-0 px-0">
                <div className="col-lg-12 px-0">
                  <LibraryTab
                    tabSections={data.tabs}
                    tabContent={data.tabContent}
                  />
                </div>

                {/* <div className="col-lg-3 px-0 d-none d-lg-block">
                  <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                    <div className="inner">
                      <div className="content-item-content">
                        <Sidebar subMenu={subMenu} />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </main>

          <Sidebar2 subMenu={subMenu} />
        </Context>
      </Provider>
    </>
  );
};

export default EngineeringLibrary;
