exports.build = function(title, pagetitle, content) {  
  return ['<!doctype html>',
  'x<html lang="en">a<meta charset="utf-8">b<title>{title}</title>c',
  'd<link rel="stylesheet" href="/assets/style.css" />e',
  'f<h1>{pagetitle}</h1>g',
  'h<div id="content">{content}</div>i']
  .join('_')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content);
};