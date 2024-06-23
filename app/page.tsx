import Image from "next/image";
import EmailSignature from "@/components/EmailSignature";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        Email Signature Generator
        <div>
          
        </div>

        <div>
          <EmailSignature />
          <div className="my-4 flex gap-4">
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Copy HTML
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Copy Signature
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
