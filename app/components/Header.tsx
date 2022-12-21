import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2'>
				<Image
					src='/victor2.jpg'
					width={50}
					height={50}
					alt=''
					className='rounded-full'
				/>
				<h1>Victor Zerefos</h1>
			</div>
			<div>
				<Link
					href='https://victorzerefos.netlify.app/'
					className='px-5 py-3 text-sm md:text-sm bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center'
				>
					Check My Portfolio
				</Link>
			</div>
		</header>
	)
}

export default Header
