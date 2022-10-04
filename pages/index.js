import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Sector7.dev"
        titleTemplate="Agencia de Marketing Digital Remota | %s"
        description="Marketing Digital Efectivo, Impulsamos tu marca en el mundo digital, Diseño Web. Branding. Campañas ADS. ¿Quieres saber más? Conocenos!"
        openGraph={{
          images: [
            {
              url: "https://api.sector7.dev/social.jpg",
              width: 800,
              height: 600,
              alt: "Agencia de Marketing Digital",
              type: "image/jpeg",
            },
            {
              url: "https://api.sector7.dev/sector7.jpg",
              width: 900,
              height: 800,
              alt: "Desarrollo web",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{}}
        /* remove */
      />

      <main>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="lg:w-3/12 relative">
            <div className="px-5 my-24 lg:mt-36">
            <Image
                src="/images/Logo_sector7.svg"
                alt="Agencia de Marketing Digital "
                width={300}
                height={57}
                title="Agencia de Marketing Digital Remota"
              />
                   <h1 className="text-lg font-semibold mb-2">Agencia de Marketing Digital Top en América Latina</h1>
              <p>
                Promociona tus servicios en la web o redes sociales. Creamos tus
                anuncios publicitarios para Google, Instagram y Facebook para
                Impulsar tu marca en el mundo digital.
              </p>
              <h2  className="text-lg font-semibold mb-2"> Empresa de desarrollo web</h2>
              <p>
                Somos una empresa especializada en el diseño y desarrollo de
                páginas web, así como posicionamiento en buscadores, social
                media marketing y desarrollo de software a medida.
              </p>
            </div>
            <div className="absolute bottom-0 flex justify-around w-full bg-secondary-60 py-4">
              <div>
                <a href="https://www.facebook.com/sector7.com.ve" rel="nofollow noreferrer" target="_blank">
                <svg
                  width="25"
                  height="45"
                  viewBox="0 0 25 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.522 25.3125L23.7718 17.1686H15.9574V11.8837C15.9574 9.65566 17.049 7.48389 20.5488 7.48389H24.1014V0.550195C24.1014 0.550195 20.8775 0 17.7952 0C11.3599 0 7.15342 3.90059 7.15342 10.9617V17.1686H0V25.3125H7.15342V45H15.9574V25.3125H22.522Z"
                    fill="#A6A6F2"
                  />
                </svg></a>
              </div>
              <div>
              <a href="https://www.freelancer.es/u/Sector7Develop" rel="nofollow noreferrer" target="_blank">
                <svg
                  width="57"
                  height="40"
                  viewBox="0 0 57 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.2935 0L37.1541 5.13762L56.6698 0H33.2935ZM12.9951 40L23.5587 30.1979L17.2011 23.7223L12.9951 40ZM31.6846 0L26.0389 4.83254L35.5346 5.16872L31.6846 0ZM9.73746 0L11.774 3.94419L22.9486 4.60478L9.73746 0ZM15.7197 20.4538L23.9758 5.83603L0 4.60562L15.7197 20.4538ZM16.6804 21.3808L24.4787 29.3314L33.081 21.3279L35.7507 6.42098L25.2668 5.91335"
                    fill="#A6A6F2"
                  />
                </svg>
                </a>
              </div>
              <div>
              <a href="https://walink.co/963fe6" rel="nofollow noreferrer" target="_blank">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.4775 5.72168C29.7949 2.03027 24.8906 0 19.6787 0C8.9209 0 0.166992 8.75391 0.166992 19.5117C0.166992 22.9482 1.06348 26.3057 2.76855 29.2676L0 39.375L10.3447 36.6592C13.1924 38.2148 16.4004 39.0322 19.6699 39.0322H19.6787C30.4277 39.0322 39.375 30.2783 39.375 19.5205C39.375 14.3086 37.1602 9.41309 33.4775 5.72168ZM19.6787 35.7451C16.7607 35.7451 13.9043 34.9629 11.417 33.4863L10.8281 33.1348L4.69336 34.7432L6.32812 28.7578L5.94141 28.1426C4.31543 25.5586 3.46289 22.5791 3.46289 19.5117C3.46289 10.5732 10.7402 3.2959 19.6875 3.2959C24.0205 3.2959 28.0898 4.9834 31.1484 8.05078C34.207 11.1182 36.0879 15.1875 36.0791 19.5205C36.0791 28.4678 28.6172 35.7451 19.6787 35.7451ZM28.5732 23.5986C28.0898 23.3525 25.6904 22.1748 25.2422 22.0166C24.7939 21.8496 24.4688 21.7705 24.1436 22.2627C23.8184 22.7549 22.8867 23.8447 22.5967 24.1787C22.3154 24.5039 22.0254 24.5479 21.542 24.3018C18.6768 22.8691 16.7959 21.7441 14.9063 18.501C14.4053 17.6396 15.4072 17.7012 16.3389 15.8379C16.4971 15.5127 16.418 15.2314 16.2949 14.9854C16.1719 14.7393 15.1963 12.3398 14.792 11.3643C14.3965 10.415 13.9922 10.5469 13.6934 10.5293C13.4121 10.5117 13.0869 10.5117 12.7617 10.5117C12.4365 10.5117 11.9092 10.6348 11.4609 11.1182C11.0127 11.6104 9.75586 12.7881 9.75586 15.1875C9.75586 17.5869 11.5049 19.9072 11.7422 20.2324C11.9883 20.5576 15.1787 25.4795 20.0742 27.5977C23.168 28.9336 24.3809 29.0479 25.9277 28.8193C26.8682 28.6787 28.8105 27.6416 29.2148 26.499C29.6191 25.3564 29.6191 24.3809 29.4961 24.1787C29.3818 23.959 29.0566 23.8359 28.5732 23.5986Z"
                    fill="#A6A6F2"
                  />
                </svg></a>
              </div>
              <div>
              
              <a href="https://www.instagram.com/sector7.dev/" rel="nofollow noreferrer" target="_blank">

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7029 9.59546C14.113 9.59546 9.60424 14.1042 9.60424 19.6941C9.60424 25.2839 14.113 29.7927 19.7029 29.7927C25.2927 29.7927 29.8015 25.2839 29.8015 19.6941C29.8015 14.1042 25.2927 9.59546 19.7029 9.59546ZM19.7029 26.2595C16.0906 26.2595 13.1374 23.3152 13.1374 19.6941C13.1374 16.073 16.0818 13.1287 19.7029 13.1287C23.324 13.1287 26.2683 16.073 26.2683 19.6941C26.2683 23.3152 23.3152 26.2595 19.7029 26.2595ZM32.57 9.18237C32.57 10.4919 31.5154 11.5378 30.2146 11.5378C28.905 11.5378 27.8591 10.4832 27.8591 9.18237C27.8591 7.88159 28.9138 6.8269 30.2146 6.8269C31.5154 6.8269 32.57 7.88159 32.57 9.18237ZM39.2585 11.573C39.1091 8.41772 38.3884 5.6228 36.0769 3.32007C33.7742 1.01733 30.9792 0.296631 27.824 0.138428C24.572 -0.0461426 14.8249 -0.0461426 11.573 0.138428C8.42651 0.287842 5.63159 1.00854 3.32007 3.31128C1.00854 5.61401 0.296631 8.40893 0.138428 11.5642C-0.0461425 14.8162 -0.0461425 24.5632 0.138428 27.8152C0.287842 30.9704 1.00854 33.7654 3.32007 36.0681C5.63159 38.3708 8.41772 39.0915 11.573 39.2497C14.8249 39.4343 24.572 39.4343 27.824 39.2497C30.9792 39.1003 33.7742 38.3796 36.0769 36.0681C38.3796 33.7654 39.1003 30.9704 39.2585 27.8152C39.4431 24.5632 39.4431 14.8249 39.2585 11.573ZM35.0574 31.3044C34.3718 33.0271 33.0447 34.3542 31.3132 35.0486C28.7204 36.0769 22.5681 35.8396 19.7029 35.8396C16.8376 35.8396 10.6765 36.0681 8.09252 35.0486C6.36987 34.363 5.04272 33.0359 4.34839 31.3044C3.32007 28.7117 3.55737 22.5593 3.55737 19.6941C3.55737 16.8289 3.32886 10.6677 4.34839 8.08374C5.03393 6.36108 6.36108 5.03393 8.09252 4.3396C10.6853 3.31128 16.8376 3.54858 19.7029 3.54858C22.5681 3.54858 28.7292 3.32007 31.3132 4.3396C33.0359 5.02515 34.363 6.35229 35.0574 8.08374C36.0857 10.6765 35.8484 16.8289 35.8484 19.6941C35.8484 22.5593 36.0857 28.7205 35.0574 31.3044Z"
                    fill="#A6A6F2"
                  />
                </svg></a>
              </div>
            </div>
          </div>
          <div className="flex max-h-screen justify-center items-center bg-black-title" style={{ backgroundImage: "url(/images/marketing-digital.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="lg:w-2/3 px-5">
            <h2 className=" text-white text-xl font-bold drop-shadow-md shadow-[#000000]/50">AGENCIA SEO REMOTA</h2>
            <p className="text-white text-lg">
              Diseñamos y optimizamos tu sitio web para que tu empresa destaque
              en los primeros lugares de búsquedas en interne, haz que tus
              clientes potenciales te consigan con ayuda de una estrategia de
              posicionamiento orgánico.
            </p>
            <p className="text-white text-lg">
              En <strong>Sector7</strong> le hacemos una auditoria SEO a tu
              sitio web completamente GRATIS, para que puedas ver los errores y
              las áreas de oportunidad que tiene tu activo digital más
              importante.
            </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
