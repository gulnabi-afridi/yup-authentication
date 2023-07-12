export const forgotPasswordModalStyles = {
  root: "relative z-10",
  child: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  fixedContainer: "fixed inset-0 z-10 overflow-y-auto",
  mainForgotPasswordContainer:
    "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
  childPanel:
    "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md",
  contentContainer:
    "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 font-sans",
  title:
    "mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans",
  form: "space-y-6",
  label: "block text-sm font-medium leading-6 text-gray-900",
  inputContainer: "mt-2",
  input:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  button:
    "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
  dcEnter: "ease-out duration-300",
  dcEnterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  dcEnterTo: "opacity-100 translate-y-0 sm:scale-100",
  dcLeave: "ease-in duration-200",
  dcLeaveFrom: "opacity-100 translate-y-0 sm:scale-100",
  dcLeaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
};

export const heroSectionStyles = {
  container: "mx-auto max-w-2xl text-center",
  title: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
  description: "mt-6 text-lg leading-8 text-gray-600",
  buttonContainer: "mt-10 flex items-center justify-center gap-x-6",
  button:
    "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  link: "text-sm font-semibold leading-6 text-gray-900",
};

export const galleryStyles = {
  container:
    "mt-24 mx-auto gap-4 max-w-5xl flex items-center justify-center flex-wrap",
  image: "rounded-lg",
};

export const signUpModalStyles = {
  signUpTitle:
    "mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans",
  dialog: "relative z-10",
  inputError: "text-[red] text-[14px]",
  overlay: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  panel:
    "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md",
  formContainer: "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 font-sans",
  orTextDashContainer: "relative mt-10",
  dash: "w-full border-t border-gray-200",
  orText: "bg-white px-6 text-gray-900",
  dontHaveAccountContainer: "flex items-center justify-between mt-6",
  signUpButton:
    "flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  orTextContainer: "relative flex justify-center text-sm font-medium leading-6",
  dashContainer: "absolute inset-0 flex items-center",
  formInputLabel: "block text-sm font-medium leading-6 text-gray-900",
  dialogPanelContainer:
    "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
  formInput:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  button:
    "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  alreadyHaveAccount: "mt-4",
  signInBtnContainer: "text-sm text-gray-500",
  signInBtn: "text-indigo-600 hover:text-indigo-500 font-medium",
  formInputContainer: "mt-2",
  child: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  child2: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  modalContent: "fixed inset-0 z-10 overflow-y-auto",
};

export const signIpModalStyles = {
  root: "relative z-10",
  overlay: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  inputError: "text-[red] text-[14px]",
  mainContentContainer: "fixed inset-0 z-10 overflow-y-auto",
  mainContent:
    "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
  panel:
    "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md",
  content: "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12",
  title:
    "mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
  input:
    "block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6",
  checkbox:
    "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
  rememberMeLabel: "ml-3 block text-sm leading-6 text-gray-900",
  forgotPasswordContainer: "text-sm leading-6",
  forgotPassword: "font-semibold text-indigo-600 hover:text-indigo-500",
  button:
    "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  orTextDashContainer: "relative mt-10",
  dashContainer: "absolute inset-0 flex items-center",
  dash: "w-full border-t border-gray-200",
  orTextContainer: "relative flex justify-center text-sm font-medium leading-6",
  orText: "bg-white px-6 text-gray-900",
  dontHaveAccountContainer: "flex items-center justify-between mt-6",
  signUpButton:
    "flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  formInputLabel: "block text-sm font-medium leading-6 text-gray-900",
  formInputContainer: "mt-2",
  rememberInputForgotPasswordContainer: "flex items-center justify-between",
  rememberMeInputContainer: "flex items-center",
  child: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  child2: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
};
