/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { Fragment, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset, ImageAsset, ProjectMeta } from "@webstudio-is/sdk";
import { Fragment as Fragment_1, Box as Box, Text as Text, Slot as Slot, Heading as Heading, Paragraph as Paragraph, Image as Image, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95","name":"SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":49256,"type":"font","createdAt":"2023-06-29T05:05:10.384Z","format":"woff2","meta":{"family":"Space Grotesk","variationAxes":{"wght":{"name":"Weight","min":300,"default":300,"max":700}}}}]
export const imageAssets: ImageAsset[] = [{"id":"60355699-b9ef-4c0c-8f28-73b15f7a5972","name":"Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":521864,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.158Z","meta":{"width":1920,"height":1080}},{"id":"b98b1840-6ce8-406b-87bc-124b8d110013","name":"Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":438504,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.089Z","meta":{"width":1080,"height":1080}},{"id":"221efd0c-6cdb-4aae-9991-de8e398ffcb6","name":"Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":618605,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.044Z","meta":{"width":1080,"height":1080}},{"id":"ab55f657-6dca-43a9-9e5e-e8c44bcf1c8d","name":"Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":272626,"type":"image","format":"jpeg","createdAt":"2023-08-04T00:15:01.092Z","meta":{"width":1080,"height":1080}},{"id":"40d19ca6-9520-4382-8a5d-eb1448ebed89","name":"Features_2.1_NIscvc7PVCAtEejnPT2I3.png","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":56703,"type":"image","format":"png","createdAt":"2023-07-28T05:41:38.887Z","meta":{"width":1080,"height":1080}},{"id":"5c9b83a3-b0b8-4774-a3f0-f1a2754bb70b","name":"Features_2.3_x8WxiEDSffKUEbdqQdEhA.png","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":166040,"type":"image","format":"png","createdAt":"2023-07-28T05:37:40.660Z","meta":{"width":1080,"height":1080}},{"id":"570689c3-6b4d-45c8-b39e-2d620a8b5b3d","name":"Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":184199,"type":"image","format":"png","createdAt":"2023-07-28T05:37:21.235Z","meta":{"width":1080,"height":1080}},{"id":"93021a48-af20-427b-a189-335e95fbd973","name":"Features_2.1_o27GLo-ZEDSqvwMxU5maT.png","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":64401,"type":"image","format":"png","createdAt":"2023-07-28T05:37:05.057Z","meta":{"width":1080,"height":1080}},{"id":"6cd2cc3e-05a9-4335-b8d5-c44e02752ef4","name":"andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":363817,"type":"image","format":"jpeg","createdAt":"2023-07-28T00:01:38.654Z","meta":{"width":1920,"height":1920}},{"id":"b281a9b4-9df8-4325-a931-e59414c95ff6","name":"clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":416475,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:28.790Z","meta":{"width":1920,"height":1920}},{"id":"d106fb5b-adcb-4f9e-ac2b-ca1a3a895f63","name":"leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":199889,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:04.664Z","meta":{"width":1080,"height":1080}},{"id":"be5f4466-449a-424d-9c2a-8c9969ba1422","name":"linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":381521,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:53:45.665Z","meta":{"width":1920,"height":1920}},{"id":"e7a5b6f4-1a35-4213-bc7a-c6a1f031c16c","name":"annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":433712,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:46:12.750Z","meta":{"width":1920,"height":1281}},{"id":"cfcf5c90-400a-49a5-9805-79392785e5c9","name":"thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":231981,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:45:31.070Z","meta":{"width":1920,"height":1920}},{"id":"96e625a7-e04d-4409-8915-618337112dcc","name":"joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":248005,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:37.368Z","meta":{"width":1920,"height":1920}},{"id":"50310230-ba74-4270-941a-b4c47b01dac3","name":"vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":250306,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:11.295Z","meta":{"width":1080,"height":1080}},{"id":"b40f3847-bbee-4a1d-bf17-599cc25bee70","name":"christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":514994,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:37:13.548Z","meta":{"width":1920,"height":1920}},{"id":"0d20baae-c818-4e27-b8db-2aba9bb9abc8","name":"bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":258631,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:49.779Z","meta":{"width":1920,"height":1920}},{"id":"a5d7152a-d834-44c8-9d49-636465a12e93","name":"daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":255793,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:25.326Z","meta":{"width":1315,"height":1315}},{"id":"c0b45f62-5f15-4256-93fa-cf57e90179d7","name":"rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":169321,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:24:51.545Z","meta":{"width":1920,"height":1498}},{"id":"c2131080-1201-4824-af48-a9e4ee4cfed6","name":"ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":480646,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:23:34.882Z","meta":{"width":1280,"height":1920}},{"id":"53313698-3a84-41e2-b33d-ef50977e34b7","name":"saksham-gangwar-YVgOh8w1R4s-unsplash_iTt_4ilWzl7GK29jeO_y9.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":204662,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:11:52.132Z","meta":{"width":1080,"height":1234}},{"id":"3fcfb32c-61bf-4c3a-9815-276b92cf8b1d","name":"edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":229318,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:53.843Z","meta":{"width":1080,"height":1080}},{"id":"6782c103-c037-4055-8939-c3c79222aa82","name":"jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":232394,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:28.055Z","meta":{"width":1526,"height":1920}},{"id":"89ff7c35-fcda-4ef1-a230-6270063654a0","name":"luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":166816,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:55.826Z","meta":{"width":1080,"height":1080}},{"id":"01042289-d848-4b0c-888d-c76714f563a5","name":"christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":272661,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:06.690Z","meta":{"width":1282,"height":1920}},{"id":"2b223d24-f02f-40cb-9aa6-6050749124ca","name":"foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":170171,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:44.697Z","meta":{"width":1080,"height":1080}},{"id":"07a1a75d-dd0d-418d-bf16-f183363b5fd8","name":"sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":231064,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:03.041Z","meta":{"width":1080,"height":1080}},{"id":"ca3fb0f6-9035-403c-98f4-01164f90b15b","name":"ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":482451,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:07:20.449Z","meta":{"width":1920,"height":1082}},{"id":"8e7b397d-ef04-4db0-bc77-ed04a0b0b54e","name":"Unlimited_k0pTiJKGKwn0-RBThmp8B.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":410,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.802Z","meta":{"width":24,"height":25}},{"id":"52504608-a171-45d5-a013-8a179b8fa059","name":"Star_Half_Full_gd_iVgLUHvt_V-1JmbFSP.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":958,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.304Z","meta":{"width":25,"height":25}},{"id":"d0fa29af-3a2d-4f24-b2b5-68a4aa11592f","name":"Star_Full_ImSm64EndSSy1xa20o-Q2.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":798,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.190Z","meta":{"width":26,"height":25}},{"id":"b78e8bfa-0186-43f1-92f5-090300837afe","name":"Check_ZuBsfCU5Bi_RHS54ItSG0.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":221,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.029Z","meta":{"width":26,"height":25}},{"id":"f82e1824-bb7d-4f55-a26d-1f25066673a7","name":"Twitter_Icon_White_E0esaSuquGdAthJcDsJlI.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":845,"type":"image","format":"svg","createdAt":"2023-06-30T22:56:44.856Z","meta":{"width":16,"height":13}},{"id":"e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3","name":"logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg","description":null,"projectId":"f1c21518-2fe4-43f4-ba24-606bd789cfee","size":16276,"type":"image","format":"svg","createdAt":"2023-03-24T21:43:47.942Z","meta":{"width":280,"height":211}}]
export const pageData: PageData = {"page":{"id":"7xIBU59ZcBYTdlcKpsBLq","name":"About","title":"About","meta":{"description":""},"rootInstanceId":"Aij73qPi0LPlTuTPUho6r","path":"/about"}};
export const user: { email: string | null } | undefined = {"email":"namburu1995@gmail.com"};
export const projectId = "f1c21518-2fe4-43f4-ba24-606bd789cfee";

type Params = Record<string, string | undefined>
type Resources = Record<string, unknown>
const Page = (_props: { params: Params, resources: Resources }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="Aij73qPi0LPlTuTPUho6r"
data-ws-component="Body"
className="c1rgwlik c1tj0iyx comzndn c1jsvila c1a9kai2 cyvi34a c13z47w8">
<Slot
data-ws-id="QEphehzbsp6Mu9uZokWha"
data-ws-component="Slot">
<Fragment_1
data-ws-id="hCrOEWk9TWQYyVMtCWD98"
data-ws-component="Fragment">
<Box
data-ws-id="TWSfZDEQ22jm6ORuD81bO"
data-ws-component="Box"
className="c1pvcyk6 c1qlvi8s c1nt68se c2kpnq8 cxeonqi">
<Box
data-ws-id="91efxtQVNXMPQCM8RISLw"
data-ws-component="Box"
className="c19sucji chd8evx c1ssspu1 ctyeyyl c7np3lo c1cxetw6 c27j0zd ct5fmur c9iweot cpr931i c1canna5 ckjo3kq cinbt74 cvcsjzb">
<Link
data-ws-id="FhAJxmce_FA6XmDDVIW3i"
data-ws-component="Link"
href={"/"}
target={"_self"}
prefetch={"intent"}
className="cf9gg89 c1tj0iyx c11x8yba c6aarc9 c1astwk5 c1eoxp8d c163mrw4">
{"SaaS Product"}
</Link>
<Box
data-ws-id="EQtO7ftc5pPiA3i2FtH_4"
data-ws-component="Box"
className="c1cxetw6 c27j0zd ct5fmur cb2lfv1">
<Link
data-ws-id="qiJP4lRhBsQYrsjtQw1zm"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}
className="cf9gg89 c1tj0iyx c6aarc9 c1astwk5 c17gcahk c163mrw4">
{"About"}
</Link>
<Link
data-ws-id="Kg7CsP8B_x57o4M1loipu"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}
className="cf9gg89 c1tj0iyx c6aarc9 c1astwk5 c17gcahk c163mrw4">
{"Pricing"}
</Link>
</Box>
<Link
data-ws-id="gfC19v0WOUgUBofuzW7Ls"
data-ws-component="Link"
className="clx65p2 cf9gg89 c1tj0iyx c11x8yba c1g1kpkw cdbv2lu c1402y1h cju25ah c1v8rk2s c6aarc9 cq04ef6 c1kqbp8j c1n17hp1 cmzyx2i cpp4zuv c1astwk5 c17gcahk cb2lfv1 cex8azd c1jzgykg cbzexp0 cz04ggu cmjvwua czgh37s co3416k cge2vw3">
{"Try the App"}
</Link>
<Dialog
data-ws-id="cgHhI9Kh3-nHGI_D69LV3"
data-ws-component="@webstudio-is/sdk-components-react-radix:Dialog"
open={sheetOpen}
onOpenChange={onOpenChange}>
<DialogTrigger
data-ws-id="13XUUVUTbo8ogBwnc2-zT"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogTrigger">
<Button
data-ws-id="CpZHAp7GJUwle5AEC_STZ"
data-ws-component="Button"
className="c1nkova9 c1gc0id3 c1uttdh7 cdsk5g5 c7x2o8c c1tj0iyx c1dt7eke c52xxqi c1qggde9 cxa6ziw cvvco69 cgcmzp cq6wngh cq7pjgl c14yhpoq cjrbp33 c1ga8e42 c1ela4xz c1iw0p26 ckjo3kq cyepfec c3d0dr1 c1o8ube5 c5segf3 cotics3 c1wqeqi2 c1khp8k5 c11x8yba c1ulvqug chzc00p c1sd8j7l cex8azd c1jzgykg cbzexp0 cz04ggu cmjvwua czgh37s co3416k cge2vw3 cbgnxqf c1tz16vv c18l5uc cmho0dh c1oxv6lj chhvev0 cs0umy4 c1q95i53 c15zs957 c1q608ql c18bpfmq c1dj3kxl">
<HtmlEmbed
data-ws-id="0emPLKUBAOQTyVrPfa1V5"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ws-id="Ee5LLqXY5bIaoNU-XdBgo"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogOverlay"
className="c1qlvi8s c1nt68se c2kpnq8 c1flzxin c1wl1sd5 ci86ous clyzsl0 c1cxetw6 c26e6q9 cpg1xac c1yj9dy4">
<DialogContent
data-ws-id="7mJmpqVW07KKydweeQWDB"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogContent"
className="chd8evx c1cxetw6 c26e6q9 cdaza5 con7sis cdbuil8 ci86ous ctqlqr6 cyltbi c1nh5vxk c13z6hj1 c1inef18 c1x3ikv9 cmf7g71 c1fgcimr c1kb2yi cb4yq1g c9x8nky cvvco69 cgcmzp cq6wngh cq7pjgl c1xiia3s cp0h810">
<Link
data-ws-id="GYmubcqsrJQtUpVYAJlR9"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}
className="cf9gg89 c1tj0iyx c6aarc9 c1astwk5 c17gcahk c163mrw4">
{"About"}
</Link>
<Link
data-ws-id="FDeooXsbMGHKYgkIJbCyw"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}
className="cf9gg89 c1tj0iyx c6aarc9 c1astwk5 c17gcahk c163mrw4">
{"Pricing"}
</Link>
<Link
data-ws-id="e2XsIImkQ3eAKNN7vhISP"
data-ws-component="Link"
className="clx65p2 cf9gg89 c1tj0iyx c11x8yba c1g1kpkw cdbv2lu c1402y1h cju25ah c1v8rk2s c6aarc9 cq04ef6 c1kqbp8j c1n17hp1 cmzyx2i cpp4zuv c1astwk5 c17gcahk cex8azd c1jzgykg cbzexp0 cz04ggu cmjvwua czgh37s co3416k cge2vw3">
{"Try the App"}
</Link>
<Box
data-ws-id="4VgBDNAygLhwa4uli1-zy"
data-ws-component="Box"
tabIndex={0} />
<DialogClose
data-ws-id="Hrwk_WYZVCMvdwMHYUJqO"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogClose"
className="c1tj0iyx c10w91s3 cph1s8 cgzk00w cyntzt c2e32tj cgcv3cl c1465fgr c1ki85rp c1cxetw6 ckjo3kq cyepfec c2cgeri c1hni5zi c1dt7eke c52xxqi c1qggde9 cxa6ziw cvvco69 cgcmzp cq6wngh cq7pjgl c14yhpoq cjrbp33 c1ga8e42 c1ela4xz c1iw0p26 c5l6b0t c1af6i7b c10lgkyj c64ypl2 c1o1o9eb c16az1r0">
<HtmlEmbed
data-ws-id="Gxg26Cbkilf_rlZq5ULhz"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
data-ws-id="y0ovkn8orARIOOFqBCavY"
data-ws-component="Box"
className="c19sucji chd8evx c1ssspu1 ctyeyyl c7np3lo ccf6tme cegm2my ca5r37r c1cxetw6 cuq498q c26e6q9 cinbt74 cvcsjzb">
<Box
data-ws-id="l6gT2u2sBW1AyrnidCKGr"
data-ws-component="Box"
className="c1t8lw2s cbs20jr c1cxetw6 c10ozgi6 chd8evx c1ssspu1 ckjo3kq c1cce2wy c1ph8mtx c19c6dtk">
<Box
data-ws-id="krOa8otC_lr-PReApOjUm"
data-ws-component="Box"
className="cgvh4eg caf82na cgfrbd9 c1u29842 c1dsqz73 c7j5b41">
<Image
data-ws-id="KqsPjlsJGROcfkdutawGv"
data-ws-component="Image"
src={"/assets/annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg"}
loading={"eager"}
className="c19z6uld cgvh4eg cuyw6bg" />
</Box>
<Box
data-ws-id="oQGErZO0PHEQBYuO3VNsq"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg c26e6q9 c1nppdxx">
<Heading
data-ws-id="4yQhPsPx7CKfbsbFv7GSC"
data-ws-component="Heading"
className="cfvft94 cgbrck2 cjlpbop cwi7s6g c10tsolf c8epfp4 c63gtwi c1352mge cnqv670 cv2saco c634k41 c1nw0t88 cjcinln c1mhyvtc">
{"About"}
</Heading>
<Text
data-ws-id="7hjBxVpPbjZZY1DEZ0sfg"
data-ws-component="Text"
className="cvvxc6x cb4yq1g">
{"Together, we stand dedicated to transforming the way teams work, embracing the power of connection to nurture innovation, and creating an environment where every team member can thrive."}
</Text>
</Box>
</Box>
<Box
data-ws-id="FJISk8X7xoXFT9tli9YGI"
data-ws-component="Box"
className="c1t8lw2s cbs20jr c1cxetw6 c26e6q9">
<Box
data-ws-id="DJRG8P9fNMzXwaAWduVc2"
data-ws-component="Box"
className="c1cxetw6 c27j0zd ct5fmur c26e6q9 ckjo3kq">
<Heading
data-ws-id="Ob9A1gLACeZM9WM8NErhM"
data-ws-component="Heading"
className="cfvft94 cgbrck2 ckhi912 c10ozgi6 c10tsolf c8epfp4 c63gtwi c1352mge cnqv670 cv2saco c634k41 c1nw0t88 cjcinln cpfuimb cr9iml8 c1ph8mtx">
{"Meet the Visionaries"}
</Heading>
<Text
data-ws-id="fRbeWRTS0jEyRNgaJkXaf"
data-ws-component="Text"
className="c15xiybp cvvxc6x cb4yq1g cpfuimb cf903jv c1mnr8u8">
{"With diverse backgrounds and expertise spanning technology, design, and business strategy, we bring a wealth of knowledge to the table. "}
</Text>
</Box>
<Box
data-ws-id="-BHgfImeEbZMuuejfqHG_"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 ckjo3kq c26e6q9">
<Box
data-ws-id="JbP0Y5kZoq3Agmn_vxWxC"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg co9so9f">
<Box
data-ws-id="hNvWj0qtQJIKmOf-P_UTB"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="kUmxAfeDen3wlS1gGI0Bf"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="dpoh5YI5b5UgU5gFP5mzb"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="DAGHbhcf4iVuJMHfEzCwn"
data-ws-component="Image"
src={"/assets/ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg cy304zy" />
</Box>
<Box
data-ws-id="7oCVAiClOho_XCMBg0hv5"
data-ws-component="Box">
<Heading
data-ws-id="ffsq_b52zsMyol1bUrhpg"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Jerome Bell"}
</Heading>
<Paragraph
data-ws-id="3Pcu-6ZezwqGQr-xMYH-P"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Co-founder and CEO"}
</Paragraph>
</Box>
<Box
data-ws-id="aBCYAqIBUO092lnD_vbit"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
<Box
data-ws-id="ae58U7QqzrfPIpfbOdMdu"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="aRdjGH0A-sDS2qQLcThGN"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="LuKhORPYyhX7i0J4Gzk4U"
data-ws-component="Image"
src={"/assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="lbywQQ4USXEJuoWZRalm9"
data-ws-component="Box">
<Heading
data-ws-id="exha--kaoHwF0yLH1glbr"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Elena Williams"}
</Heading>
<Paragraph
data-ws-id="YEY7FFWYSXbl_DM2cHBh5"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Co-founder and CTO"}
</Paragraph>
</Box>
<Box
data-ws-id="pVzZzd-Av4TlUbIfYY2Df"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
</Box>
<Box
data-ws-id="oY1ZFvMr3NOT-JpRHWSDS"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="8SdHBGloKSMADdsoz2Mvl"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="XDFcX4iEu6CdHaqxDRTRx"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="Q7dM5C2-r4z9W3mbujdnt"
data-ws-component="Image"
src={"/assets/daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="EcquI3M10mIqkLgHa3gH7"
data-ws-component="Box">
<Heading
data-ws-id="19ZRkH9RncSQrmCEyZ2rg"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Sarah Miller "}
</Heading>
<Paragraph
data-ws-id="X0hdIaoQ39eyMyW_KtU8h"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Head of Product Design"}
</Paragraph>
</Box>
<Box
data-ws-id="hIy_5qVV9QE7EmCLoa4mf"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
<Box
data-ws-id="d_nTMgdxuIg75sX68K4IV"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="FqezXZJVy6OIVYgHrGRSL"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="yuWzvn21qpJ4Kfg8C0dMu"
data-ws-component="Image"
src={"/assets/bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="TISzZI2Y57Xy2yYjH5eKV"
data-ws-component="Box">
<Heading
data-ws-id="DfW1FpPEQtnWqPArk25Ow"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"David Ramirez"}
</Heading>
<Paragraph
data-ws-id="ozBbxQF4S-qgn_Yh1p-qV"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Lead Software Engineer"}
</Paragraph>
</Box>
<Box
data-ws-id="eUKyHBLJ6KGDi46sfrEmr"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
</Box>
</Box>
<Box
data-ws-id="nj1MYzdWV_0FZ5AnxMvOl"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg co9so9f">
<Box
data-ws-id="Ym9zpcOavGMeZrdM7ZqKX"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="F9cSJQ08nUA_85aTyppOx"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="RgDO_CQD2ZUh2M6rgu8Vg"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="ScbCUoA32ufgfTqunwuGn"
data-ws-component="Image"
src={"/assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="EqiglCwEnkxvBs-CfDxks"
data-ws-component="Box">
<Heading
data-ws-id="6KUnQ2Tbl5t90yBYP8JJS"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Jessica Parker"}
</Heading>
<Paragraph
data-ws-id="-JGoXrvf0x8gNNCYAALFu"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Marketing and Communications Manager"}
</Paragraph>
</Box>
<Box
data-ws-id="V3KAIh83j4Ds3sRcLFnhB"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
<Box
data-ws-id="QM43qR-L_kf7_kQR_nJRb"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="Ew6AOGKdZu3BtRCo_X06z"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="GqgSaJ3ojuvmyxaOu9dLT"
data-ws-component="Image"
src={"/assets/vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="aH92ZEzeMR3rv-Z8zA1eO"
data-ws-component="Box">
<Heading
data-ws-id="90C73zyxN2tRV_XQs_471"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Robert Thompson"}
</Heading>
<Paragraph
data-ws-id="frSPziNd5mNoJBU9aGeao"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Business Development Specialist"}
</Paragraph>
</Box>
<Box
data-ws-id="2_7fMYITutHccBiEoULE8"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
</Box>
<Box
data-ws-id="Bi8RArKh4Vi2YGEUEHIGq"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="CnAd_amIrnMjCFcqWqwe6"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9">
<Box
data-ws-id="miNTCWQJ03RGHuPj8zY0P"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="fXf6nxm7WGsFvcpM0NsD3"
data-ws-component="Image"
src={"/assets/joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg" />
</Box>
<Box
data-ws-id="XQUz0hor3Sx27gsWIbbUm"
data-ws-component="Box">
<Heading
data-ws-id="tfrfOnHQSv7_UwJ09t21P"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Melissa Lee"}
</Heading>
<Paragraph
data-ws-id="cxIpc54DrE3N90hf0NNyV"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"UX/UI Designer"}
</Paragraph>
</Box>
<Box
data-ws-id="T5eKkyh_v0zNNLNx_dLcH"
data-ws-component="Box"
className="c8epfp4 ck5g1qv c1352mge c2gciih cv2saco cafqt5r czxwa6n cjcinln c1x2qrx8 cxe75xu" />
</Box>
<Box
data-ws-id="xg6gF2toApiQ9aQJ-f2Ca"
data-ws-component="Box"
className="c18gruqr cylugaf cgvh4eg c1cxetw6 c26e6q9 cb2lfv1" />
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="cnr-e3CwEJrTFptgAQSwv"
data-ws-component="Box"
className="c1t8lw2s cbs20jr c1cxetw6 c26e6q9">
<Box
data-ws-id="VZKri5tXDggaswadXecNl"
data-ws-component="Box"
className="c1cxetw6 c26e6q9 ckjo3kq c27j0zd ct5fmur">
<Heading
data-ws-id="p_fjVqVKt0_ouMrm0TraD"
data-ws-component="Heading"
className="cfvft94 cgbrck2 ckhi912 c10tsolf c8epfp4 c63gtwi c1352mge cnqv670 cv2saco c634k41 c1nw0t88 cjcinln cy0fbwv cpfuimb cr9iml8">
{"Our Investors"}
</Heading>
<Text
data-ws-id="pgtBTdeNiaeYtfqeN87HV"
data-ws-component="Text"
className="cvvxc6x cb4yq1g c15xiybp cpfuimb cf903jv c1mnr8u8">
{"Our investors' trust in our team and our product inspires us to push boundaries, think creatively, and never settle for the status quo."}
</Text>
</Box>
<Box
data-ws-id="FDqv4pvBlfYOjCzYPEZdf"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 c1lhufur c18tbbth c26e6q9 c18mm733 c1momtiu">
<Box
data-ws-id="yJNgCa6i1ZTxh2jqlB2e_"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 co9so9f">
<Box
data-ws-id="Y1SEmO3etbUqTdY8t_rXy"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="E7a8ay6Kk09LMyrdNQ2MD"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="vRA5Cim4Trc9cCPlzc-wm"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="_Z_nbuXMarQm1wTKwZYBj"
data-ws-component="Image"
src={"/assets/ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg cjj7721" />
</Box>
<Box
data-ws-id="Q08XcskX3DpBTRVZ3tqVt"
data-ws-component="Box">
<Heading
data-ws-id="D2oczgUKN7INqQ8nDd1C1"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Thomas Anderson"}
</Heading>
<Paragraph
data-ws-id="K_3JVeCvgouGt0GBiWJSV"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Venture Capital Partners, Managing Director"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="DKDF6PFiwbKQUeKBnagxp"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="5er1IbnT1wzFlADEjnz94"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="tdTcTUxZBEWwuhUA594LO"
data-ws-component="Image"
src={"/assets/sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg c1wsq3e3" />
</Box>
<Box
data-ws-id="EVYYxjiCjBzKeqFi6VMSw"
data-ws-component="Box">
<Heading
data-ws-id="J_a7lfwe0EJjg_F5ohzDP"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Jessica Martinez"}
</Heading>
<Paragraph
data-ws-id="HDXZ380j2QehQ2jRWna3X"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Tech Innovations Fund, Principal Investor"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="5ASv0Y9gW1syeVA__xDjv"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="UnlAbUrA9WaWbzrCg--P6"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="-ZdIOQOTFk2BgZ3nO72Jw"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="WFQsxzFqj7kpnWi3wXISu"
data-ws-component="Image"
src={"/assets/foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg c1wsq3e3 cjj7721" />
</Box>
<Box
data-ws-id="XMClOXjqqj1C7S5F88sRx"
data-ws-component="Box">
<Heading
data-ws-id="WIe_KKFBtSWKJOx9vMfW4"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"David Wilson"}
</Heading>
<Paragraph
data-ws-id="3BNgvFgBEwmay3rR3DesZ"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Growth Ventures Inc., Senior Partner"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="FQbtc4ny7V8xjPUtA3MqI"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="FxQrMynJ7Uq7B7PIkmXNO"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="zhA3mc9ROh4CihqFD6bI8"
data-ws-component="Image"
src={"/assets/christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg c1pkvdfc" />
</Box>
<Box
data-ws-id="T4NpZiLEsG7jtZ36r3HfJ"
data-ws-component="Box">
<Heading
data-ws-id="9bLRXLFEfo9XBKHvKXYwZ"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Rachel Chen"}
</Heading>
<Paragraph
data-ws-id="uvZOHZwyMbf1PuxOtq1XN"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Impact Investments Group, Head of Investments"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="Dv9pg_7vl6k2OeM5CFLWo"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 co9so9f">
<Box
data-ws-id="VrVTk_oSzrxS_Q57tLCMa"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="KpMUv-_BcXTa6ksYvrw_h"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="eFkpkOLjEsubh0U_m7Mmz"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="I3tindkPwX4cLrafudm-_"
data-ws-component="Image"
src={"/assets/luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg c1wsq3e3 cjj7721" />
</Box>
<Box
data-ws-id="dTIMUCrn8C_NdWM5SvKlM"
data-ws-component="Box">
<Heading
data-ws-id="YgLe4tL5vAg1zG3EkKUm_"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Jonathan Patel"}
</Heading>
<Paragraph
data-ws-id="xiPeu_or6z45Pw7HYsP-9"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Global Innovators Fund, Managing Partner"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="8JqroTaQBdU7Yirz0C2We"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="lqgmGRHBsu71yj4PaqXGl"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="iOBp1M8075Q_x5QhA9yfv"
data-ws-component="Image"
src={"/assets/jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg cb3ckgc" />
</Box>
<Box
data-ws-id="_x3yQ7zrwZ8VZHQVJcLJ2"
data-ws-component="Box">
<Heading
data-ws-id="kR5xKldJU9G9psPpLseZ9"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Laura Sanchez"}
</Heading>
<Paragraph
data-ws-id="v9RMQW35MhNsOKfn0DfbE"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Sustainable Futures Capital, Investment Analyst"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="d3kuBtzHlozOSX8RL2yL7"
data-ws-component="Box"
className="c27j0zd ct5fmur c1cxetw6 cgvh4eg cdhep6f">
<Box
data-ws-id="6i6EsYUbIZpRFiWqAYyAt"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="KuAZUMRsyqDAOt9_ve6NT"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="0_SL7kYubQYOSBMUPDaJC"
data-ws-component="Image"
src={"/assets/thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg cjj7721" />
</Box>
<Box
data-ws-id="ChGADBNm30EX2aD9G0ZUc"
data-ws-component="Box">
<Heading
data-ws-id="swn5DQ7eTtIUw-xiwEluD"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Michael Lee"}
</Heading>
<Paragraph
data-ws-id="pKAuhgEBNz-FS5ypg35Hk"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"Strategic Ventures Ltd., Managing Director"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="s0gKMKKf0DSM-_NCfUymx"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 cgvh4eg c26e6q9">
<Box
data-ws-id="ImxFTamSdnj58VUwMuQP4"
data-ws-component="Box"
className="cgfrbd9 c1u29842 c1dsqz73 c7j5b41 caf82na c1wsq3e3">
<Image
data-ws-id="xV5VJN7PrQ42LT0G9ophv"
data-ws-component="Image"
src={"/assets/edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg"}
className="cgvh4eg c19z6uld cuyw6bg c1wsq3e3" />
</Box>
<Box
data-ws-id="7kGFi4uOIK-lZ2KNNEAtz"
data-ws-component="Box">
<Heading
data-ws-id="PeTkrcQ4RoS7oaXFjlsfs"
data-ws-component="Heading"
className="c19alofk cfvft94 cgbrck2">
{"Melissa Thompson"}
</Heading>
<Paragraph
data-ws-id="9mEkQwTFgLZJOJ5NpiCA3"
data-ws-component="Paragraph"
className="cfvft94 cgbrck2 cvvxc6x cb4yq1g c6aarc9 c1astwk5 cbao96g">
{"FutureTech Fund, Investment Manager"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="RB-59O22rSqexBPG1nF0Y"
data-ws-component="Slot">
<Fragment_1
data-ws-id="LXAE0omYOBDRhwHgmjbxd"
data-ws-component="Fragment">
<Box
data-ws-id="etSoQ_YpqbbjYSdf5gDn_"
data-ws-component="Box"
className="c1pvcyk6">
<Box
data-ws-id="T3kf2U4vSUW1jD4y_NEma"
data-ws-component="Box"
className="c19sucji chd8evx c1ssspu1 ctyeyyl c7np3lo c1t8lw2s cbs20jr c1cxetw6 c13qervm cyj8r88 c1canna5 c31rz7d cinbt74 cvcsjzb">
<Box
data-ws-id="_5z42eLI3fQfzg74Ywbb1"
data-ws-component="Box"
className="c1t8lw2s cbs20jr c1cxetw6 cp0h810 cvf2sdh c1hknde8">
<Link
data-ws-id="8_lYbS23oem75lqyneJKk"
data-ws-component="Link"
className="cf9gg89 c1tj0iyx c11x8yba c6aarc9 cf1di0x c1astwk5 cbao96g">
{"SaaS Product"}
</Link>
<Box
data-ws-id="ZyWzCL9VJFsmbTZBNU9-c"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 c26e6q9 cf1di0x">
<Text
data-ws-id="xJocVo6XEiFAGYZU4WEBy"
data-ws-component="Text"
className="c6aarc9 c11x8yba c1tj0iyx c1astwk5 cbao96g">
{"Company"}
</Text>
<Link
data-ws-id="OemFDMxMz1dQm6ZNizOMu"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Team"}
</Link>
<Link
data-ws-id="RyCe2Bi_tJJxSIa6o--Yd"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Privacy Policy"}
</Link>
<Link
data-ws-id="fymS9Wubd_R1Ni-24Zyx6"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Terms of Service"}
</Link>
</Box>
</Box>
<Box
data-ws-id="jNyPk4jlM6WQIun_94FT1"
data-ws-component="Box"
className="c1t8lw2s cbs20jr c1cxetw6 cp0h810 cvf2sdh">
<Box
data-ws-id="tAD0q_c3Lcz3S18VRY9VO"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 c26e6q9 cf1di0x">
<Text
data-ws-id="dJ3D3qquPPEVbf4FQytOh"
data-ws-component="Text"
className="c6aarc9 c11x8yba c1tj0iyx c1astwk5 cbao96g">
{"Community"}
</Text>
<Link
data-ws-id="KF0zY92pvFsNrmUkiD2iq"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Github"}
</Link>
<Link
data-ws-id="k_TUj7O7myu3xDr7wGUNx"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Discord"}
</Link>
<Link
data-ws-id="dLWBQCL9gyAllSg5RXwyU"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Twitter"}
</Link>
<Link
data-ws-id="GFaKIM1XZQEAZ-qwxKOx_"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Product Hunt"}
</Link>
</Box>
<Box
data-ws-id="EtrG_tdm2KROkPiB9DlEM"
data-ws-component="Box"
className="c18gruqr cylugaf c1cxetw6 c26e6q9 cf1di0x">
<Text
data-ws-id="sQd2JlvN3_sraUU2JjqrV"
data-ws-component="Text"
className="c6aarc9 c11x8yba c1tj0iyx c1astwk5 cbao96g">
{"Product"}
</Text>
<Link
data-ws-id="_-DoDHqUkbX9m6W1L4jk_"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Pricing"}
</Link>
<Link
data-ws-id="av5H5w4bddISdUjP9Fxl0"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Download"}
</Link>
<Link
data-ws-id="CP_4Oip6tvDePQJWy5Pma"
data-ws-component="Link"
className="c6aarc9 cf9gg89 cvvxc6x cb4yq1g c1astwk5 c1eoxp8d c163mrw4">
{"Source Code"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Body>
}


export { Page }

export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}



  export const pagesPaths = new Set(["","/pricing","/about"])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
