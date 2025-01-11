"use client";

import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import iphoneImage from '@public/IMG_3646.webp';
import iphoneImage2 from '@public/IMG_3648.png';

import appleImage from '@public/apple.png';
import googleImage from '@public/google.png';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

export default function Home() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log('Created by https://omarzunic.com');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div
      className="flex flex-col gap-2 w-full items-center"
      key={key}
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      <div className="w-full h-dvh select-none items-center max-w-3xl justify-center p-4 lg:p-0 transition-all lg:justify-between flex flex-col lg:flex-row">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex gap-2 w-full items-start flex-col">
            <Draggable>
              <h1
                className="draggable text-left px-4 cursor-grab active:cursor-grabbing text-6xl font-bold">
                Style
              </h1>
            </Draggable>
          </div>
          <Draggable>
            <span className="draggable text-left font-sans cursor-grab active:cursor-grabbing px-4 text-xl">
              Find your perfect look with the help of Style.
            </span>
          </Draggable>
          <Draggable>
            <div className="draggable hidden lg:flex gap-2 p-4 cursor-grab active:cursor-grabbing">
              <Link
                href="https://apps.apple.com/hu/app/style-a-szem%C3%A9lyes-stylist/id6581490950">

                <Image
                  src={appleImage}
                  alt="apple"
                  width={200}
                  height={200}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=hu.thestyleapp.app">
                <Image
                  src={googleImage}
                  alt="google"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </Draggable>
          <div className="draggable lg:hidden flex gap-2 p-4 cursor-grab active:cursor-grabbing">
            <Link
              href="https://apps.apple.com/hu/app/style-a-szem%C3%A9lyes-stylist/id6581490950">

              <Image
                src={appleImage}
                alt="apple"
                width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=hu.thestyleapp.app">
              <Image
                src={googleImage}
                alt="google"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <Draggable>
            <span className="font-sans max-w-[300px] draggable text-left cursor-grab active:cursor-grabbing px-4 text-md w-full lg:w-[500px] text-balance">
              Csak fotózd le a ruháid, és az AI azonnal
              stílusos outfit-javaslatokat generál az ízlésedhez igazítva.
              Legyen szó munkáról, buliról vagy hétköznapi inspirációról, a Style mindig segít.
            </span>
          </Draggable>
          <div className="z-10">
            <Draggable>
              <Link href="/outfit" className="px-4">
                <Button className="text-lg">
                  Generate Outfit
                </Button>
              </Link>
            </Draggable>
          </div>
        </div>
        <Draggable>
          <button
            type='button'
            onMouseEnter={e => {
              const children = e.currentTarget.children;
              if (children.length !== 2) return;
              (children[0] as any).style.transform = "translateX(-100px) rotate(-5deg)";
              (children[1] as any).style.transform = "translateX(100px) rotate(5deg)";
            }}
            onMouseLeave={e => {
              const children = e.currentTarget.children;
              if (children.length !== 2) return;
              (children[0] as any).style.transform = "";
              (children[1] as any).style.transform = "";
            }}
            onClick={e => {
              const children = e.currentTarget.children;
              if (children.length !== 2) return;

              e.currentTarget.replaceChildren(children[1], children[0]);
            }}
            className="draggable hidden lg:flex relative group items-center justify-center">

            <Iphone15Pro
              className="lg:h-[600px] group-hover:drop-shadow-sm absolute transition-all"
              src={iphoneImage2.src}
            />
            <Iphone15Pro
              className="w-screen lg:w-fit pointer-events-none lg:pointer-events-auto lg:h-[600px] translate-y-[70%] lg:translate-y-0 drop-shadow-sm absolute transition-all"
              src={iphoneImage.src}
            />
          </button>
        </Draggable>
        <Button
          className="hidden lg:block text-md"
          onClick={() => {
            setKey(key + 1);
          }}>hey</Button>
      </div >
    </div>
  );
}
