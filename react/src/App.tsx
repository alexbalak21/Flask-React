import GetData from './components/GetData'
import PostData from './components/PostData'

export default function App() {
  return (
    <main className="p-6 space-y-6">
      <h1 className='text-3xl text-center mb-5'>React Js Integration App</h1>
      <GetData />
      <PostData />
    </main>
  )
}
