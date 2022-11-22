import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            {/* Vous allez vouloir pour créer un élément HEAD */}
            <Head>
                {/* Faire un titre imbrique a l'interieur de l'element precedent */}
                <title>Profille de Devins</title>
            </Head>
            <div className='h-[80vh] w-[30vw] shadow-lg rounded-lg relative bg-gray-100 py-10'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-full border-2 border-gray-200 hover:rounded-lg transition-all duration-500' src='/pfp.jpg' />
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-center'>Bonjour! Je Suis <span className='text-blue-600'>Devin</span></h1>
                    <p className='px-10 w-2/3 text-center'>
                        J'aime programme sites du web, j'apprecie les appredre le developmente de sites du web
                    </p>
                </div>
                <div className='absolute bottom-5 w-full'>
                    {[{ texte: "Devin", couleur: "teal" }].map((item, index) => (
                        <div className=' mx-10 rounded-lg p-3 text-center text-white font-bold text-2xl' style={{ backgroundColor: item.couleur }}>{item.texte}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
