export function viewFileType(url) {
  let type = "";
  if (url.endsWith(".doc") || url.endsWith(".docx")) {
    type = "word";
  } else if (url.endsWith(".xls") || url.endsWith(".xlsx")) {
    type = "excel";
  } else if (url.endsWith(".ppt") || url.endsWith(".pptx")) {
    type = "ppt";
  } else if (url.endsWith('.pdf')) {
    type = 'pdf'
  }
  return type
}
