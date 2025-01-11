import DotPattern from "@/components/ui/dot-pattern";
import Link from "next/link";
import appleImage from '@public/apple.png';
import googleImage from '@public/google.png';
import Image from "next/image";


export default async function Page() {
    const resp = await fetch('https://styleapi.ecook.hu/generate-outfit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: 'nyeso.edu+new@gmail.com'
        }),
        cache: 'no-cache',
    });

    const data: ApiResponse = await resp.json();
    if (!data.success) {
        return <div>Failed to generate outfit</div>;
    }
    return (
        <div
            className="container h-full w-full flex flex-col justify-center items-center py-8"
        >
            <DotPattern
                className="fixed"
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
            />
            <div>
                <Link href="/">
                    <h1
                        className="select-none text-left cursor-grab active:cursor-grabbing text-6xl font-bold">
                        Style
                    </h1>
                </Link>
            </div>
            <div className="space-y-6 divide-y-2">
                {Object.entries(data.outfit).map(([key, item], index) => {
                    if (!item) { return null; }
                    return (
                        <div
                            key={item._id}
                            className="flex pt-16 flex-col max-w-[800px] md:flex-row gap-6 bg-card rounded-lg"
                        >
                            <div className="hover:scale-110 transition-all w-full md:w-1/3">
                                <div className="aspect-square relative">
                                    <Image
                                        src={`https://styleapi.ecook.hu/${item.imagePath}`}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 p-6 z-50">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold capitalize mb-1 font-sans">{key}</h3>
                                        <p className="text-lg text-muted-foreground">{item.title}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 select-none gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-medium font-sans text-muted-foreground mb-1">Style</p>
                                        <p>{item.style}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-sans text-muted-foreground mb-1">Color</p>
                                        <p>{item.color}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-sans text-muted-foreground mb-1">Pattern</p>
                                        <p>{item.pattern}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium font-sans text-muted-foreground mb-1">Fit</p>
                                        <p>{item.fit}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium select-none text-muted-foreground mb-2 font-sans">Suitable for</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.occasion.map((occ, i) => (
                                            <span
                                                key={i}
                                                className="select-none px-2 py-1 bg-white border text-sm"
                                            >
                                                {occ}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <footer
                className="flex gap-2 flex-col md:flex-row items-center justify-center p-8 mt-4 cursor-grab"
            >
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
            </footer>
        </div>
    );
}


type OutfitItem = {
    imagePath: string;
    title: string;
    description: string;
    style: string;
    category: string;
    color: string;
    pattern: string;
    fit: string;
    occasion: string[];
    weather: string;
    type: string;
    _id: string;
};

type Outfit = {
    top: OutfitItem;
    bottom: OutfitItem;
    shoes: OutfitItem;
    overtop: OutfitItem;
};

type ApiResponse = {
    success: boolean;
    outfit: Outfit;
};
