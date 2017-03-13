#! /usr/bin/env ruby

require 'rest-client'
require 'nokogiri'
require 'json'

response = RestClient.get 'http://emojipedia.org/unicode-6.0/'

html_doc = Nokogiri::HTML(response.body)
emoji = html_doc.css('.content .emoji').map { |node| node.content }
puts emoji.to_json

