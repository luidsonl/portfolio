import Image from "next/image"

export default function Avatar({ src = "/avatar.svg", alt = "Avatar", size = 96 }: { src?: string; alt?: string; size?: number }) {
  return (
    <div className="w-auto">
      <Image src={src} alt={alt} width={size} height={size} className="rounded-full" />
    </div>
  )
}
