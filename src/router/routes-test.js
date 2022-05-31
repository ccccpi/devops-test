//递归获取 views 文件夹下的所有.vue文件
const files = import.meta.globEager("../test/*.vue");

// TODO:这个还可以优化
let pages = {};
for (var key in files) {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = key;
}

//生成路由规则
let generator = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
  },
];
Object.values(pages).forEach((item) => {
  const name = item.replace(/..*\/|.vue/g, "");
  // console.log("item:", item);
  // console.log("path:", item.replace(/^..|.vue/g, ""));
  // console.log("name:", name);
  generator.push({
    path: item.replace(/^..|.vue/g, ""),
    name: item.replace(/..*\/|.vue/g, ""),
    component: () => import(`../test/${name}.vue`),
  });
});

//合并公共路由以及重定向规则
const routesTest = [
  {
    path: "/",
    name: "redirect Home",
    redirect: "/home",
  },
  ...generator,
];

export default routesTest;
