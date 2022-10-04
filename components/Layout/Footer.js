import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-200 ">
        <div className="py-16 container ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className=" max-w-sm">
              <Image
                src="/images/logo-claro-microsyscom.svg"
                alt="Microsyscom"
                width="289"
                height="50"
              />

              <address className=" text-white">
              <strong>Microsyscom</strong> es una empresa de Ingeniería y
                Consultoría IT.

                <a href="mailto:info@microsyscom.com">Información General: info[@]microsyscom.com</a>.
                <br />
                <a href="tel:34913807566">+34.91.380.75.66</a>.
                <br />
                <strong> Oficina Madrid:</strong>  <br />C/Casas de Miravete,24 A 28031 Madrid España
                <br />
                <strong> CPD I Madrid: </strong> <br />C/Yecora,4 28022 Madrid España
              
              </address>

              <div className="flex mt-8 text-white space-x-6">
                <a
                  className="hover:opacity-75"
                  href="https://www.facebook.com/GrupoMicrosyscom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.linkedin.com/company/grupo-microsyscom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Linkedin </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href="https://www.instagram.com/microsyscom/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href="https://twitter.com/microsyscom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href="https://www.youtube.com/c/Microsyscom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Youtube </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className=" font-title font-semibold text-white text-xl">
                  Servicios informáticos
                </p>
                <nav className="flex flex-col mt-4 text-base font-title text-white space-y-2">
                  <Link href="/mantenimiento-informatico-madrid">
                    <a>Mantenimiento informático</a>
                  </Link>
                  <Link href="/networking">
                    <a>Servidores y redes</a>
                  </Link>
                  <Link href="/backup-en-la-nube-para-empresas">
                    <a>Copias de seguridad</a>
                  </Link>
                  <Link href="/empresas-de-renting-tecnologico">
                    <a>Renting tecnológico</a>
                  </Link>
                  <Link href="/soporte-informatico-madrid">
                    <a>Soporte Informático</a>
                  </Link>
                </nav>
              </div>

              <div>
                <p className=" font-title font-semibold text-white text-xl">
                  Conócenos
                </p>
                <nav className="flex flex-col mt-4 text-base font-title text-white space-y-2">
                  <Link href="/sobre-microsyscom">
                    <a>Quiénes Somos</a>
                  </Link>
                  <Link href="/certificaciones-normas">
                    <a>Certificaciones y Normas</a>
                  </Link>
                  <Link href="/responsabilidad-corporativa">
                    <a>Responsabilidad Corporativa</a>
                  </Link>
                </nav>
              </div>
              <div>
                <Image
                  src="/images/EMPRENDIMIENTO_JOVEN_LOGO_WEB_MICROSYSCOM.png"
                  alt="Microsyscom"
                  width="122"
                  height="170"
                />
                <Image
                  src="/images/Logotipo-FSE-Empleo-Juvenil_fondo_blanco-300x94.png"
                  alt="Microsyscom"
                  width="235"
                  height="73"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-333 text-white">
        <div className="grid grid-1 md:grid-cols-2 container py-2 ">
        <div>
        <p className="text-sm text-white">&copy; 2022 Grupo Microsyscom S.L. Todos los Derechos Reservados. </p>
        </div>
        <div className="flex justify-around text-sm">
          <Link href=""><a> CONDICIONES GENERALES</a></Link>
          <Link href=""><a> POLÍTICA DE PRIVACIDAD</a></Link>
          <Link href=""><a> MAPA DEL SITIO</a></Link>
          <Link href=""><a> MANTENIMIENTO INFORMÁTICO</a></Link>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
