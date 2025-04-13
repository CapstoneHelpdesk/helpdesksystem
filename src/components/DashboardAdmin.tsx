// import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Card, CardContent } from "../components/ui/card";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "../components/ui/accordion";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "../components/ui/sheet";
// import { Avatar } from "../components/ui/avatar";
// import { Bell, Mail, Filter, Menu } from "lucide-react";

// function Sidebar({
//   open,
//   setOpen,
// }: {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }) {
//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetContent className="w-64 bg-gray-900 text-white p-4">
//         <SheetHeader>
//           <SheetTitle>Pemprov Bandung</SheetTitle>
//         </SheetHeader>
//         <nav className="mt-4 flex flex-col gap-2">
//           <Button variant="ghost" className="justify-start">
//             Kelola
//           </Button>
//           <Button variant="ghost" className="justify-start">
//             Terdisposisi
//           </Button>
//           <Button variant="ghost" className="justify-start">
//             Arsip
//           </Button>
//           <Button variant="ghost" className="justify-start">
//             Terlapor
//           </Button>
//         </nav>
//       </SheetContent>
//     </Sheet>
//   );
// }

// function Navbar({
//   setOpenSidebar,
// }: {
//   setOpenSidebar: (open: boolean) => void;
// }) {
//   return (
//     <div className="flex justify-between items-center bg-white p-4 shadow-md">
//       <div className="flex items-center gap-2">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setOpenSidebar(true)}
//         >
//           <Menu className="w-6 h-6" />
//         </Button>
//         <h1 className="text-lg font-bold">Kelola Laporan</h1>
//       </div>
//       <div className="flex items-center gap-4">
//         <Bell className="cursor-pointer" />
//         <Mail className="cursor-pointer" />
//         <Avatar />
//       </div>
//     </div>
//   );
// }

// function Statusbar() {
//   return (
//     <div className="flex gap-2 p-2 bg-gray-100">
//       <span className="text-sm">Belum Terverifikasi: 6</span>
//       <span className="text-sm text-red-500">Tertunda: 3</span>
//       <span className="text-sm">Belum Ditindaklanjuti: 0</span>
//       <span className="text-sm">Sedang Diproses: 0</span>
//     </div>
//   );
// }

// function SearchFilter() {
//   return (
//     <div className="flex gap-2 p-4 bg-white shadow">
//       <Input placeholder="Tracking ID / Isi / Pelapor" className="w-full" />
//       <Button variant="outline">
//         <Filter className="w-5 h-5" />
//       </Button>
//     </div>
//   );
// }

// function ListData() {
//   return (
//     <Accordion type="single" collapsible>
//       <AccordionItem value="item-1">
//         <AccordionTrigger>zhafira_253 - Belum Terverifikasi</AccordionTrigger>
//         <AccordionContent>
//           <Card>
//             <CardContent>Consequat. Duis aute irure dolor...</CardContent>
//           </Card>
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>
//           muhammadburhan_253 - Belum Terverifikasi
//         </AccordionTrigger>
//         <AccordionContent>
//           <Card>
//             <CardContent>Halo saya coba lapor</CardContent>
//           </Card>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }

// export default function Dashboard() {
//   const [openSidebar, setOpenSidebar] = useState(false);

//   return (
//     <div className="flex h-screen">
//       <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
//       <div className="flex-1 flex flex-col">
//         <Navbar setOpenSidebar={setOpenSidebar} />
//         <Statusbar />
//         <SearchFilter />
//         <div className="p-4 flex-1 overflow-auto bg-gray-50">
//           <ListData />
//         </div>
//       </div>
//     </div>
//   );
// }
