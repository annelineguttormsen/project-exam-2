$(function() {
    $accountMenuIcon = $(".account__menu__icon");
    $accountMenuList = $("account__menu__list");

    console.log($accountMenuIcon, $accountMenuList);

    $accountMenuIcon.on("click",function() {
        $accountMenuList.toggleClass("account__menu__list--hidden");
        console.log("onclick tilkalt");
    });
});