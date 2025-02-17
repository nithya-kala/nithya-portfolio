import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.presto.com/"
            target="_blank"
            className="hover:underline"
          >
            Presto
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            FEB 2023 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            SENIOR SOFTWARE ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed application components using Javascript, <b>React</b>, Redux, and <b>Tailwind CSS</b> to ensure a seamless and responsive user interface
          </li>
          <li>
            Created reusable components based on design system in Figma, wrote stories in storybook with robust test coverage
          </li>
          <li>
            Created <b>GraphQL</b> queries and mutations utilizing AWS AppSync, Lambdas and integration into Redshift, S3 and <b>DynamoDB</b>
          </li>
          <li>
            Led SSO exploration with OneLogin and Auth0, seamlessly implementing <b>Auth0</b> for authentication to enable Single Sign-On for internal users and Google OAuth for customers
          </li>
          <li>
            Implemented Role-Based Access Control (RBAC) using JWT tokens for app access
          </li>
          <li>
           Improved <b>unit test</b> code coverage of WebApp from 60% to 80% using jest and React Testing Library
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.ibm.com"
            target="_blank"
            className="hover:underline"
          >
            IBM
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            May 2016 - July 2022
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
             Fullstack Developer
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed and sustained the web applications utilizing HTML5, CSS3, <b>TypeScript</b>, React, React-Hooks, Redux and <b>Storybook.js</b>
          </li>
          <li>
           Engineered the BRET tool to automate the calculation of the BRET Score (Business Risk Evaluation Tool) for BP, resulting in a 30% boost in Compliance team efficiency
          </li>
          <li>
            Designed and implemented <b>REST API</b> services using Expressjs, DB2 and <b>MongoDB</b>
          </li>
          <li>
            Spearheaded and helped the team on various technical queries
          </li>
          <li>
            Built, implemented, and maintained multiple customer facing frontend web applications
          with JavaScript, <b>Angular</b> 13, RxJS and Bootstrap
          </li>
          <li>
            Automated unit test cases (TDD) through jest-dom, Jasmine, and Karma
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
