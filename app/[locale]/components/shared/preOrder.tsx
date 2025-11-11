
import Image from 'next/image';

export default function preOrder() {
  return (
    <>
        <div className="preloder animated">
            <div className="scoket">
                <Image src="/img/preloader.svg" alt="" width={50} height={50} />
            </div>
        </div>
    </>
  );
}