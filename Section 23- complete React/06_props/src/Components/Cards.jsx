import React from 'react'
//non scalable approac of using props
// const Cards = (props) => {
//   return (
//    <>
//    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
//   <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400 "alt="" width="384" height="512"/>
//   <div class="pt-6 text-center space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti quo itaque voluptatem officiis vel aut nobis repudiandae consequatur odio facere at iusto totam explicabo labore, porro beatae neque debitis.
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         {props.username}
//       </div>
//       <div class="text-slate-700 dark:text-slate-500">
//        {props.staff}
//       </div>
//     </figcaption>
//   </div>
// </figure>
//    </>
//   )
// }



//scalable approach of using props
// const Cards = (props) => {
//   return (
//    <>
//    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
//   <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400 "alt="" width="384" height="512"/>
//   <div class="pt-6 text-center space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti quo itaque voluptatem officiis vel aut nobis repudiandae consequatur odio facere at iusto totam explicabo labore, porro beatae neque debitis.
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         {props.username}
//       </div>
//       <div class="text-slate-700 dark:text-slate-500">
//        {props.staff}
//       </div>
//     </figcaption>
//   </div>
// </figure>
//    </>
//   )
// }
// scalable approach of using props
//we can goive by default and also tehre is no need of wriring word props again and again
const Cards = ({username = "hc", post = "not assigned "}) => {
  return (
    <>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400 "
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              deleniti quo itaque voluptatem officiis vel aut nobis repudiandae
              consequatur odio facere at iusto totam explicabo labore, porro
              beatae neque debitis.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{username}</div>
            <div class="text-slate-700 dark:text-slate-500">dwbgdwsb</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};


export default Cards