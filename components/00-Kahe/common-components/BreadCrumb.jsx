"use client";

import { base } from "@/utils/constant.util";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = ({ items = [], showHome = true }) => {
  // Default Home item
  const homeItem = { label: "Home", href: "/" };

  // Merge Home + passed items (avoid duplicate Home)
  const finalItems =
    showHome && items[0]?.label !== "Home"
      ? [homeItem, ...items]
      : items;

  if (!finalItems.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-100 overflow-auto"
      style={{ padding: "20px 30px" }}
    >
      <ol
        className="d-inline-flex align-items-center mb-0"
        style={{ whiteSpace: "nowrap" }}
      >
        {finalItems.map((item, index) => {
          const isLast = index === finalItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="d-inline-flex align-items-center"
            >
              {!isLast && item.href ? (
                <Link
                href={item.label !== "Home"?`${base}/${item.href}`:item.href}
                  className="fw-medium text-decoration-none text-secondary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="fw-semibold text-success">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <FaChevronRight className="mx-2 small text-success" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
