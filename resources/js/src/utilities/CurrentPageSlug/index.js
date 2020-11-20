export default function CurrentPageSlug () {
    const pathName = (window.location.href).split('/');
    return pathName[pathName.length - 1];
}