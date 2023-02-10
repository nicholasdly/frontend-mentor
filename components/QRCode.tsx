
export default function QRCode() {
    return (
        <div class="bg-white w-[375px] rounded-3xl text-center">
            <div class="m-5 rounded-2xl overflow-hidden">
                <image src='image-qr-code.png' />
            </div>
            <p class="text-primary font-bold text-2xl px-12 pt-2">
                Improve your front-end skills by building projects
            </p>
            <p class="text-accent text-lg px-12 pt-5 pb-12">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    )
}
