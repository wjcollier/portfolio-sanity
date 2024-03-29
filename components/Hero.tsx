import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"
import {
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo?.name}`,
			'Coder/Design-Dreamer.tsx',
			'< Creator of Violent Light Labs™ 💥/>',
		],

		loop: true,
		delaySpeed: 200,
  })

  return (
		<div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden  '>
			<BackgroundCircles />
			<Image
				className='relative object-cover rounded-full hover:animate-spin mx-auto '
				src={urlFor(pageInfo?.heroImage).url()}
				alt='cover image'
				width='150px'
				height='150px'
			/>
			<div className='z-20'>
				<h2 className='text-xs font-bold md:text-md uppercase text-gray-500 dark:text-gray-500 pb-2 tracking-[10px] md:tracking-[15px] '>
					{pageInfo?.role}
				</h2>
				<h1 className='sm:text-2xl lg:text-4xl font-semibold px-10 '>
					<span className='italic dark:text-white mr-3'>{text}</span>
					<Cursor cursorColor='#00FF15' />
				</h1>

				<div className='flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-3'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
				<a
					className=' text-gray-400 transition-all  hover:text-[#9552FF]/90  gap-1 md:gap-2 font-normal lg:font-light flex justify-center items-center w-fit mx-auto pt-5 text-xs lg:text-base'
					target={'_blank'}
					rel='noreferrer'
					href='https://wjcollier.github.io/WJC-resume-2022/'>
					<span>Resume</span>
					<ArrowTopRightOnSquareIcon height={'1rem'} width='1rem' />
				</a>
			</div>
		</div>
  )
}
