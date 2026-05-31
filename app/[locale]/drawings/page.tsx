import type { Metadata } from "next";
import DrawingsClient from "@/src/components/DrawingsClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("drawings");
  const n = await getTranslations("navbar");
  return {
    title: n("drawings"),
    description: t("metaDescription"),
  };
}

export default function Page() {
  return <DrawingsClient />;
}
