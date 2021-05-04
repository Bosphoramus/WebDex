export default function ProjectPresentation() {
    return (
        <div className="space-y-6 py-4 leading-relaxed">
            <div className="flex justify-center">
                <a href="/pokedex">
                    <img src="readme.svg" alt="presentation graphic" decoding="async" className="dark:shadow-lg-invert" />
                </a>
            </div>
            <div className="space-y-10">
                <article className="space-y-4">
                    <h2 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent">Project Summary</h2>
                    <hr />
                    <p>Small project in which i tested some libraries/technologies i was interested in. All data is fetched from the <a href="https://pokeapi.co" className="text-blue-600 dark:text-blue-500 hover:underline">PokeApi</a>.</p>
                    <p>This project's repository: <a href="https://github.com/Bosphoramus/WebDex" className="text-blue-600 dark:text-blue-500 hover:underline">GitHub</a></p>
                    <p>Technologies i used on this project:</p>
                    <ul className="list-disc list-inside">
                        <li>NEXT.js</li>
                        <li>react-query</li>
                        <li>Tailwind CSS</li>
                        <li>react-range</li>
                    </ul>
                    <p>The site has a dark mode variant, triggered by the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" className="text-blue-600 dark:text-blue-500 hover:underline">prefers-color-scheme</a> media query, and implemented using <a href="https://tailwindcss.com/docs/dark-mode" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind CSS</a>.</p>
                    <p>This is a <a href="https://nextjs.org/" className="text-blue-600 dark:text-blue-500 hover:underline">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app" className="text-blue-600 dark:text-blue-500 hover:underline bg-gray-200 dark:bg-gray-800 rounded-lg p-1">create-next-app</a>.</p>
                </article>
                <article className="space-y-4">
                    <h2 className="font-bold text-xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">Getting Started</h2>
                    <hr />
                    <p>First, run the development server:</p>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 font-mono">
                        <p><span className="text-green-500">npm</span> run dev</p>
                        <p className="text-gray-500"># or</p>
                        <p><span className="text-green-500">yarn</span> dev</p>
                    </div>
                    <p>Open <a href="http://localhost:3000" className="text-blue-600 dark:text-blue-500 hover:underline">http://localhost:3000</a> with your browser to see the result.</p>
                    <p>You can start editing the page by modifying <span className="bg-gray-200 dark:bg-gray-800 rounded-lg p-1">pages/index.js</span>. The page auto-updates as you edit the file.</p>
                </article>
                <article className="space-y-4">
                    <h2 className="font-bold text-xl bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">Learn More</h2>
                    <hr />
                    <p>To learn more about Next.js, take a look at the following resources:</p>
                    <ul className="list-disc list-inside">
                        <li><a href="https://nextjs.org/docs" className="text-blue-600 dark:text-blue-500 hover:underline">Next.js Documentation</a> - learn about Next.js features and API.</li>
                        <li><a href="https://nextjs.org/learn" className="text-blue-600 dark:text-blue-500 hover:underline">Learn Next.js</a> - an interactive Next.js tutorial.</li>
                        <li><a href="https://react-query.tanstack.com/" className="text-blue-600 dark:text-blue-500 hover:underline">react-query</a> - main site</li>
                        <li><a href="https://tailwindcss.com/" className="text-blue-600 dark:text-blue-500 hover:underline">TailwindCSS</a> - main site</li>
                        <li><a href="https://www.npmjs.com/package/react-range" className="text-blue-600 dark:text-blue-500 hover:underline">react-range</a> - npm's site</li>
                    </ul>
                    <p>You can check out the <a href="https://github.com/vercel/next.js/" className="text-blue-600 dark:text-blue-500 hover:underline">Next.js GitHub repository</a> - your feedback and contributions are welcome!</p>
                </article>
                <article className="space-y-4">
                    <h2 className="font-bold text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Deployed on Vercel <span className="text-black dark:text-white ml-1">▲</span></h2>
                    <hr />
                    <p>Live on <a href="https://webdex.antoniorm.dev" className="text-blue-600 dark:text-blue-500 hover:underline">webdex.antoniorm.dev</a></p>
                    <p>The easiest way to deploy your Next.js app is to use the <a href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme" className="text-blue-600 dark:text-blue-500 hover:underline">Vercel Platform</a> from the creators of Next.js.</p>
                    <p>Check out <a href="https://nextjs.org/docs/deployment" className="text-blue-600 dark:text-blue-500 hover:underline">Next.js deployment documentation</a> for more details.</p>
                </article>
            </div>
        </div>
    )
}
