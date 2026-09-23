"use client";

import { FeaturebaseProvider } from "featurebase-js/react";

export default function FeaturebaseRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FeaturebaseProvider appId="6ab3eb821d56b228e6f353b9">
      {children}
    </FeaturebaseProvider>
  );
}
