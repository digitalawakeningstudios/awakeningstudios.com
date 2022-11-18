source "http://rubygems.org"

gem "jekyll", "~> 4.2.2"

group :jekyll_plugins do
  gem "jekyll-postcss"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: %i[mingw x64_mingw mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Ruby 3 no longer includes webrick
gem "webrick"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", ">= 1.0.0", platforms: %i[mri mingw x64_mingw]
end
