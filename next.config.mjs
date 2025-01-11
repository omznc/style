/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "styleapi.ecook.hu",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
