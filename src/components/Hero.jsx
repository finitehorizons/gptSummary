import { logo } from "../assets";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz-logo' className='w-48 object-contain' />
                <button type='button' onClick={() => window.open("https://github.com/finitehorizons")} className='black_btn'>
                    Github
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles Using  <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc letter-spacing_balance'>
                Unlock the potential of articles effortlessly with <strong>SummarizeFlow</strong>, a cutting-edge SaaS tool integrating GPT-4 for intelligent summarization. Dive into the heart of any piece with ease with clear, digestible summaries.
                Revolutionize your reading experience and save valuable time with this intuitive and powerful tool.
            </h2>
        </header>
    );
};

export default Hero;
