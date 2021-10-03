import RootLayoutBase from "./RootLayout";

export function RootLayout() {
    return <RootLayoutBase 
    content={<div style={{backgroundColor: "red"}}>Content</div>}
    header={<div style={{backgroundColor: "orange"}}>Header</div>}
    footer={<div style={{backgroundColor: "violet"}}>Footer</div>}
    sidebar={<div style={{backgroundColor: "green"}}>Sidebar</div>}
    />
}

export default {
    title: "components/RootLayout",
}