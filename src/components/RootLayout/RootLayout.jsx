import React from "react";
import {
  Root,
  ContentLayout,
  FooterLayout,
  HeaderLayout,
  SidebarLayout,
} from "./RootLayout.ui";

function RootLayout({ header, footer, content, sidebar }) {
  return (
    <Root>
      <FooterLayout>{footer}</FooterLayout>
      <HeaderLayout>{header}</HeaderLayout>
      <ContentLayout>{content}</ContentLayout>
      <SidebarLayout>{sidebar}</SidebarLayout>
    </Root>
  );
}

export default RootLayout;
