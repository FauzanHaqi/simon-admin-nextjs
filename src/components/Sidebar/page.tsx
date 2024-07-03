"use client";
import Image from "next/image";
import * as React from "react";
import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[17vw] h-[90vh] min-h-max bg-[#1B1D2A] py-10 px-2">
      <div className="flex items-center text-white gap-3 mb-5 px-2">
        <Image
          src={"/images/profile_admin.svg"}
          alt="logo"
          width={45}
          height={60}
        />
        <div>
          <h3 className="text-lg font-semibold">Admin</h3>
          <h6 className="text-sm">SMKN 2 MATARAM</h6>
        </div>
      </div>
      <hr className=" mb-5" />
      <div className="text-white text-lg">
        <Accordion isCompact disabledKeys={"0"}>
          <AccordionItem key="0" hideIndicator={true} title="Home" startContent={<Image src={"/images/home.svg"} alt="masterdata" width={24} height={100} />}></AccordionItem>
          <AccordionItem key="1" title="Master Data" startContent={<Image src={"/images/master_data.svg"} alt="masterdata" width={24} height={100} />}>
            <ul>
              <li><Link href={"/masterdata/siswa"}>Data Siswa</Link></li>
              <hr />
              <li><Link href={"/masterdata/guru"}>Data Guru</Link></li>
              <hr />
              <li><Link href={"/masterdata/dudi"}>Data DU/DI</Link></li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" title="Pelaksanaan PKL" startContent={<Image src={"/images/pelaksanaan_pkl.svg"} alt="masterdata" width={24} height={100} />}>
            <ul>
              <li><Link href={"/"}>Kunjungan Guru</Link></li>
              <hr />
              <li><Link href={"/"}>Laporan PKL</Link></li>
              <hr />
              <li><Link href={"/"}>Laporan Siswa PKL</Link></li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" title="Laporan PKL" startContent={<Image src={"/images/laporan.svg"} alt="masterdata" width={24} height={100} />}>
            <ul>
              <li><Link href={"/"}>Laporan PKL Siswa</Link></li>
              <hr />
              <li><Link href={"/"}>Laporan PKL Guru</Link></li>
              <hr />
              <li><Link href={"/"}>Laporan PKL DU/DI</Link></li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
