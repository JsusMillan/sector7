import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  InformationCircleIcon
  
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const productos = [
  {
    name: "Servidores",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/servidores",
    icon: ChartBarIcon,
  },
  {
    name: "Almacenamiento",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/almacenamiento",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Networking",
    description: "Your customers' data will be safe and secure.",
    href: "/networking",
    icon: ShieldCheckIcon,
  },
  {
    name: "Telepresencia",
    description: "Connect with third-party tools that you're already using.",
    href: "/telepresencia",
    icon: Squares2X2Icon,
  },
  {
    name: "UPS – SAIS",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/ups-sais",
    icon: ArrowPathIcon,
  },
  {
    name: "Centralitas virtuales y telefonía IP",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/centralitas-y-telefonos",
    icon: ArrowPathIcon,
  },
  {
    name: "Control de Accesos",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/control-de-accesos",
    icon: ArrowPathIcon,
  },
  {
    name: "Software",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/software",
    icon: ArrowPathIcon,
  },
];


const servicios = [
  {
    name: "Mantenimiento informático Empresas",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/mantenimiento-informatico-madrid",
    icon: LifebuoyIcon,
  },
  {
    name: "Soporte Informático",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/soporte-informatico-madrid",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Copias de seguridad",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/backup-en-la-nube-para-empresas",
    icon: CalendarIcon,
  },
  {
    name: "Renting de equipamiento",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/empresas-de-renting-tecnologico",
    icon: CalendarIcon,
  },
  {
    name: "Centro de servicios",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/centro-de-servicio",
    icon: CalendarIcon,
  },
  {
    name: "Despliegues y Mantenimiento",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/despliegues-y-mantenimiento",
    icon: CalendarIcon,
  },
  {
    name: "Outsourcing",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/outsourcing",
    icon: CalendarIcon,
  },
  {
    name: "Telefonia IP",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/soluciones-de-voz-y-datos",
    icon: CalendarIcon,
  },
  {
    name: "Cloud Computing",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/cloud-computing",
    icon: CalendarIcon,
  },
  {
    name: "Robotización",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/robotizacion",
    icon: CalendarIcon,
  },
  {
    name: "DataCenter",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/data-center",
    icon: CalendarIcon,
  },
];
const ciberseguridad = [
  {
    name: "Puesto de Usuario",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Seguridad de Red",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/seguridad-de-red",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Seguridad del dato",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/seguridad-del-dato",
    icon: CalendarIcon,
  },
  {
    name: "Iot/OT",
    description: "Understand how we take your privacy seriously.",
    href: "/iot-ot",
    icon: ShieldCheckIcon,
  },
  {
    name: "CibersSOC",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/centro-de-operaciones-de-seguridad-soc",
    icon: CalendarIcon,
  },
  {
    name: "Gestion de Vulnerabildiades",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/gestion-de-vulnerabildiades",
    icon: CalendarIcon,
  },
  {
    name: "Formacion y Concienciación",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/formacion-y-concienciacion",
    icon: CalendarIcon,
  },
  {
    name: "VCISO",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/vciso",
    icon: CalendarIcon,
  },
  {
    name: "Monitorizacion DarKWeb",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/monitorizacion-darKWeb",
    icon: CalendarIcon,
  },
  {
    name: "Analisis de comportamiento",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/analisis-de-comportamiento",
    icon: CalendarIcon,
  },
  {
    name: "Auditoría Ciberseguridad",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/auditoria-ciberseguridad",
    icon: CalendarIcon,
  },
  {
    name: "Proteccion de Datos",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/proteccion-de-datos",
    icon: CalendarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      <div className="bg-blue-200 py-2">
        <div className="container flex  justify-center lg:justify-between">
          <div className="text-white flex items-center ">
            <a href="https://www.facebook.com/GrupoMicrosyscom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="https://twitter.com/microsyscom" className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/grupo-microsyscom/"
              className="ml-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="https://microsyscom.com/empresas-de-informatica-en-madrid/#UneteANosotros"
              className="ml-3"
            >
              Envía tu currículum
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex text-white">
              <li className="ml-4 flex items-center">
              <  InformationCircleIcon  width="18" height="18" className="mr-1" />
                <a href="https://microsyscom.com/soporte-tecnico-informatico">
                  Soporte
                </a>
              </li>
              <li className="ml-4 flex items-center">
                <EnvelopeIcon  width="18" height="18" className="mr-1" />
                <a href="https://microsyscom.com/contacto" >Escríbenos</a>
              </li>
              <li className="ml-4 flex items-center">
              <LifebuoyIcon  width="18" height="18" className="mr-1" />
                <a href="http://cauinformatica.com/">
                  Centro de soporte <strong>24x7</strong>
                </a>
              </li>
              <li className="ml-4 flex items-center">
              <PhoneIcon  width="18" height="18" className="mr-1" />
                <a href="tel:34913807566">+34.91.380.75.66</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Popover className="relative bg-white">
        <div className="border-b-2 border-gray-100 ">
          <div className="container flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="px-2 lg:px-0 flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Microsyscom</span>
                  <Image
                    src="/images/logo-microsyscom.svg"
                    alt="Microsyscom"
                    width="289"
                    height="50"
                  />
                </a>
              </Link>
            </div>
            <div className="-my-2 lg:-mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                <span className="sr-only">Abrir menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      as="a"
                      className={classNames(
                        open ? "text-gray-300" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none "
                      )}
                    >
                      <span className="text-lg font-title font-medium text-black  group-hover:text-blue-200 group-hover:cursor-pointer">
                        Productos
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-blue-200" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-blue-200 group-hover:cursor-pointer"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {productos.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100 group">
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-blue-300 group-hover:text-blue-200"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-title font-medium text-gray-300 group-hover:text-blue-200">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-200">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      as="a"
                      className={classNames(
                        open ? "text-gray-300" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none "
                      )}
                    >
                      <span className="text-lg font-title font-medium text-black  group-hover:text-blue-200 group-hover:cursor-pointer">
                        Servicios y soluciones
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-blue-200" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-blue-200 group-hover:cursor-pointer"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-6 w-screen max-w-md lg:max-w-4xl -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid lg:grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {servicios.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100 group">
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-blue-300 group-hover:text-blue-200"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-title font-medium text-gray-300 group-hover:text-blue-200">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-200">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
          
                      

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      as="a"
                      className={classNames(
                        open ? "text-gray-300" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none "
                      )}
                    >
                      <span className="text-lg font-title text-black  group-hover:text-blue-200 group-hover:cursor-pointer">
                        Ciberseguridad
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-blue-200" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-blue-200 group-hover:cursor-pointer"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
              

                      <Popover.Panel className="absolute left-1/2 z-10 mt-6 w-screen max-w-md lg:max-w-4xl -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid lg:grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {ciberseguridad.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100 group">
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-blue-300 group-hover:text-blue-200"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-title font-medium text-gray-300 group-hover:text-blue-200">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-200">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/zona-clientes">
                <a className="text-lg font-title font-medium text-black  group-hover:text-blue-300">
                  Zona Clientes
                </a>
              </Link>
              <Link href="/contacto">
                <a className="text-lg font-title font-medium text-black  group-hover:text-blue-300">
                  Contacto
                </a>
              </Link>
            </Popover.Group>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {productos.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-blue-300"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {ciberseguridad.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-blue-300 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Header;
