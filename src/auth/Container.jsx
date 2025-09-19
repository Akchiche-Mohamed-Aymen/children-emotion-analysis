
export default function Container({children}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300">
      {children}
    </div>
  )
}
