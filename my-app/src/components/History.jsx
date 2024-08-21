import React from "react";
import team from "../assets/images/ggg.jpeg";
import Button from "./Button";

function History() {
  return (
    <div className="mx-auto ml-6 mr-6 py-10 px-4 z-40 bg-white">
      <h1 className="font-bold text-black text-center text-3xl pb-6">OUR HISTORY</h1>
      <div class=" rounded overflow-hidden shadow-lg  items-center py-6">
        <img className="w-full h-[500px] object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-1000 rounded-lg" src={team} alt=" " />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-400 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            commodi quia est deleniti assumenda itaque cupiditate doloribus non
            ut vitae soluta quae accusamus eligendi optio, cumque quisquam
            consequatur temporibus voluptatibus aspernatur? Quia, laboriosam
            mollitia. Magni vel iusto nobis deserunt suscipit pariatur aut
            dolor, soluta voluptatibus totam culpa inventore quos minus atque
            assumenda veritatis. Recusandae eveniet aliquam laudantium quo
            repellendus. Quo id odit reiciendis, ipsum voluptatum itaque ratione
            cum laborum officiis, tempora incidunt voluptatibus? Quam nostrum
            quia voluptatum eveniet, impedit ipsa neque facilis aliquid
            laboriosam necessitatibus id dolorem animi ipsum facere magnam
            inventore consequatur? Earum dolorum ab error voluptatum dignissimos
            saepe impedit at facilis alias. Delectus nemo hic illo ratione
            beatae sed natus odio aliquam, ipsum quisquam vero quod. Provident
            porro quisquam cupiditate dolore alias voluptates, aspernatur quae
            iusto fuga molestiae? Labore, neque, reprehenderit consectetur sit
            nisi aliquid, fuga minima eveniet dolorum voluptates ullam!
            Architecto ea cupiditate rerum placeat repellendus magnam repellat
            dolore! Commodi id reprehenderit cumque omnis ea, doloremque
            dignissimos culpa modi et molestias aperiam? Deleniti, fuga pariatur
            ratione commodi eum hic provident quas numquam? Sit eos blanditiis
            vitae sequi? Numquam impedit error, pariatur, debitis iusto corporis
            a temporibus laudantium, quae repellendus cum ea quis placeat
            officiis asperiores voluptatem quibusdam?
          </p>
        </div>
        <div class="flex justify-center px-6 pt-4 pb-2 items-center">
        <Button>
        READ MORE
        </Button>
        </div>
       
      </div>
    </div>
  );
}

export default History;
