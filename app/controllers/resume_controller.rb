class ResumeController < ApplicationController
  def homepage
  end

  def sendMail
	Pony.mail({
		  :to => 'cjcham77@gmail.com',
		  :via => :smtp,
		  :from => params[:email],
		  :subject => params[:subject],
		  :body => params[:emailbody],
		  :via_options => {
		    :address              => 'smtp.gmail.com',
		    :port                 => '587',
		    :enable_starttls_auto => true,
		    :user_name            => 'cjcham77@gmail.com',
		    :password             => ENV["EMAIL_PASSWORD"],
		    :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
		    :domain               => "carsonhamiltonresume.herokuapp.com" # the HELO domain provided by the client to the server
		  }
		})
  	# @mail = Pony.mail(:to =>'cjcham77@gmail.com', :via => :smtp, :from => params[:email], :subject => params[:subject], :body => params[:emailbody])
	redirect_to root_path
  end
end
