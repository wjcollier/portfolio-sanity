import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Technology } from '../typings'

type Props = {
  skills: Technology[]
}

export default function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000-px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Tech Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[2px] text-gray-500 text-sm  '>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-7 pt-20'>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  )
}