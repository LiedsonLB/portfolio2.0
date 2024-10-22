'use client'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContateMe() {
    const [isOpen, setIsOpen] = useState(false);

    function sendMensage(e: any) {
        e.preventDefault();
        emailjs.sendForm(
            'YOUR_SERVICE_ID',  // Substitua pelo seu Service ID
            'YOUR_TEMPLATE_ID',  // Substitua pelo seu Template ID
            e.target,
            'YOUR_USER_ID'       // Substitua pelo seu User ID
        ).then((result) => {
            console.log(result.text);
            setIsOpen(true);  // Abre o modal após enviar a mensagem
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (

        <div className="py-20" id="contateMe">
            <h1 className="big-text font-[800] text-center text-black mb-4" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Meus <span className="text-blue">contatos</span></h1>
            <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-black  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Sinta-se à vontade para conversar comigo. Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para colaborar e ajudar a <span className="underline"> concretizar seus planos</span>.
            </p>
            <div className="max-w-[95%] md-lg:max-w-[85%] m-auto py-8 px-6 md-lg:px-12 rounded-lg shadow-md bg-white text-black tracking-wide leading-relaxed">
                <div className="flex flex-col justify-center md-lg:flex-row gap-10 md-lg:gap-40">
                    <div className="text-black">
                        <div className="flex flex-col gap-4 text-black">
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center justify-center bg-blue rounded-full text-white text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                </div>
                                <div>
                                    <p className="text-text-light">Meu email</p>
                                    <p className="">liedson.b9@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center justify-center bg-blue rounded-full text-white text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                                </div>
                                <div>
                                    <p className="text-text-light">Meu telefone</p>
                                    <p className="">+55 86 998635571</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p className="text-text-light py-2">Redes sociais:</p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/liedson.vue" className="flex items-center justify-center bg-blue rounded-full text-white cursor-pointer text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                            <a href="https://wa.me/86998635571?text=Olá%20vamos%20criar%20algo%20extraordinário!" className="flex items-center justify-center bg-blue rounded-full text-white cursor-pointer text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/liedsonlb/" className="flex items-center justify-center bg-blue rounded-full text-white cursor-pointer text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                            </a>
                            <a href="https://github.com/LiedsonLB" className="flex items-center justify-center bg-blue rounded-full text-white cursor-pointer text-[clamp(1.3rem,2vw,1rem)] h-[40px] w-[40px] p-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>                            </a>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center md-lg:max-w-[400px] w-full">
                        <div className="w-full">
                            <p className="text-blue text-xl text-start"><strong>Mande uma mensagem agora:</strong></p>
                        </div>
                        <form onSubmit={sendMensage} className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col gap-4 text-[.85rem] my-8 max-w-[90%] md-lg:max-w-[100%] w-full">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="text"
                                        className="input-search-login pl-8"
                                        placeholder=" "
                                    />
                                    <label htmlFor="text" className="user-label w-100">
                                        Seu nome
                                    </label>
                                </div>

                                <div className="input-group min">
                                    <input
                                        type="text"
                                        name="text"
                                        className="input-search-login"
                                        placeholder=" "
                                    />
                                    <label htmlFor="text" className="user-label w-100">
                                        Seu email
                                    </label>
                                </div>

                                <div className="input-group min">
                                    <input
                                        type="text"
                                        name="text"
                                        className="input-search-login"
                                        placeholder=" "
                                    />
                                    <label htmlFor="text" className="user-label w-100">
                                        Assunto
                                    </label>
                                </div>

                                <div className="input-group min">
                                    <input
                                        type="text"
                                        name="text"
                                        className="input-search-login"
                                        placeholder=" "
                                    />
                                    <label htmlFor="text" className="user-label w-100">
                                        Mensagem...
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="flex items-center justify-center gap-2 px-5 py-3 m-auto rounded-full w-fit bg-blue text-white scaleIn" disabled={loading}>
                                {loading ? (
                                    <>
                                        Enviando...
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="15px" height="15px" viewBox="0 0 512 512">
                                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        Enviar
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="15px" height="15px" viewBox="0 0 512 512">
                                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}